import { createContext, useContext, useState } from 'react'
import { api } from '../services/api'

const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [authData, setAuthData] = useState({})

    async function signIn({ email, password }) {
        try {
            const response = await api.post("/session", { email, password })
            const { token, user } = response.data

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