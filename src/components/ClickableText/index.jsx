import { Container } from './styles'

export function ClickableText({ title, ...rest }) {

    return (
        <Container
            type="button"
            {...rest}
        >
            {title}
        </Container>
    )
}