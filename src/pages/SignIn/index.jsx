import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Background, Container, Form } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { useAuth } from '../../hooks/auth'
import { useState } from 'react'

export function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { signIn } = useAuth()

    function handleSignInBtn() {
        signIn({ email, password })
    }

    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>A place to store and manage your useful links.</p>

                <h2>Sign In</h2>

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={event => setEmail(event.target.value)}
                />
                <Input
                    placeholder="Password"
                    type="password"
                    icon={FiLock}
                    onChange={event => setPassword(event.target.value)}
                />

                <Button title="Sign In" onClick={handleSignInBtn} />

                <Link to="/register">New Account</Link>
            </Form>

            <Background />

        </Container>
    )
}