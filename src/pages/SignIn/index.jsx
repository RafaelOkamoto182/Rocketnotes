import { FiMail, FiLock } from 'react-icons/fi'

import { Container, Form } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {
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

                <a href="#">New Account</a>



            </Form>


        </Container>
    )
}