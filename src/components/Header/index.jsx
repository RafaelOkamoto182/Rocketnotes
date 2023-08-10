import { Container, Profile, Logout } from './styles'
import { RiShutDownLine } from 'react-icons/ri'

export function Header() {
    return (
        <Container>
            <Profile>
                <img src='https://github.com/RafaelOkamoto182.png' alt='user picture' />

                <div>
                    <span>Welcome</span>
                    <strong>Rafael Okamoto</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>

        </Container>
    )
}