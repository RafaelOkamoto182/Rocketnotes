import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Container, Form, Avatar } from "./styles";
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
                <Avatar>
                    <img src="https://github.com/RafaelOkamoto182.png"
                        alt="User profile picture"
                    />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input id="avatar" type="file" />
                    </label>
                </Avatar>
                <Input placeholder="Name" type="text" icon={FiUser} />
                <Input placeholder="E-mail" type="text" icon={FiMail} />
                <Input placeholder="Old Password" type="password" icon={FiLock} />
                <Input placeholder="New Password" type="password" icon={FiLock} />

                <Button title="Save" />
            </Form>
        </Container>
    )
}