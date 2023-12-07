import { Container, Profile, Logout } from './styles'
import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/auth'

export function Header() {
    const { signOut } = useAuth()
    return (
        <Container>
            <Profile to='/profile'>
                <img src='https://github.com/RafaelOkamoto182.png' alt='user picture' />

                <div>
                    <span>Welcome</span>
                    <strong>Rafael Okamoto</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine />
            </Logout>

        </Container>
    )
}