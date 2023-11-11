import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Background, Container, Form } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { useAuth } from '../../hooks/auth'

export function SignIn() {
    const data = useAuth()
    console.log(data)

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
                />
                <Input
                    placeholder="Password"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Sign In" />

                <Link to="/register">New Account</Link>
            </Form>

            <Background />

        </Container>
    )
}