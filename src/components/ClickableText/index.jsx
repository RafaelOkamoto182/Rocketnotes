import { Container } from './styles'

export function ClickableText({ title, isactive = false, ...rest }) {

    return (
        <Container
            type="button"
            $isactive={isactive}
            {...rest}
        >
            {title}
        </Container>
    )
}