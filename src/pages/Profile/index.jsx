import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Container, Form } from "./styles";
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
export function Profile() {

    return (
        <Container>
            <header>
                <a href="/">
                    <FiArrowLeft />
                </a>
            </header>

            <Form>
                <Input placeholder="Name" type="text" icon={FiMail} />
                <Input placeholder="E-mail" type="text" icon={FiMail} />
                <Input placeholder="Old Password" type="password" icon={FiLock} />
                <Input placeholder="New Password" type="password" icon={FiLock} />

                <Button title="Save" />
            </Form>
        </Container>
    )
}