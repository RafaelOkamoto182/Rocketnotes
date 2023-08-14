import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Background, Container, Form } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp() {
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
                />
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

                <Button title="Sign Up" />

                <Link to='/'>Already have an account? Sign In</Link>
            </Form>



        </Container>
    )
}