import { Container } from './styles'

export function ClickableText({ title, isActive = false, ...rest }) {

    return (
        <Container
            type="button"
            isActive={isActive}
            {...rest}
        >
            {title}
        </Container>
    )
}