import { Container } from './styles'

export function ClickableText({ title, isActive = false, ...rest }) {

    return (
        <Container
            type="button"
            $isactive={isActive.toString()}
            {...rest}
        >
            {title}
        </Container>
    )
}