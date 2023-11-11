import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { Background, Container, Form } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { api } from '../../services/api'

export function SignUp() {

    //[nomeDoEstado, funcParaMudarOEstado] = useState(estado inicial)
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    async function handleSignUp() {
        if (!userName || !email || !password) {
            alert("Fill all the fields")
            return
        }
        try {

            await api.post("/user", { name: userName, email, password })
            alert("E-mail registered successfully")

            navigate("/")

        } catch (error) {

            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("We were unable to complete this request")
            }

        }


    }

    return (
        <Container>
            <Background />
            <Form>
                <h1>Rocket Notes</h1>
                <p>A place to store and manage your useful links.</p>

                <h2>Create your account</h2>

                <Input
                    placeholder="Name"
                    type="text"
                    icon={FiUser}
                    onChange={e => setUserName(e.target.value)}
                />
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Password"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Sign Up" onClick={handleSignUp} />

                <Link to='/'>Already have an account? Sign In</Link>
            </Form>



        </Container>
    )
}