import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [authData, setAuthData] = useState({})

    async function signIn({ email, password }) {
        try {
            const response = await api.post("/session", { email, password })

            const { user, token } = response.data

            localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
            localStorage.setItem("@rocketnotes:token", token)

            api.defaults.headers.authorization = `Bearer ${token}`
            setAuthData({ user, token })

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Unknown error. Unable to login right now")
            }
        }
    }

    //useEffect é sempre chamada após a renderização do componente. Pode ter um estado dependente em [], que também chama a useEffect 
    //qdo ele for mudado.
    //É utilizado dentro da funcao do componente para poder acessar os estados dele.
    useEffect(() => {
        const token = localStorage.getItem("@rocketnotes:token")
        const user = localStorage.getItem("@rocketnotes:user")

        if (token && user) {
            api.defaults.headers.authorization = `Bearer ${token}`
            setAuthData({ token, user: JSON.parse(user) })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ signIn, user: authData.user }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }