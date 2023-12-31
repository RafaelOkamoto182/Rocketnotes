import { Container } from './styles'

export function Button({ title, loading = false, ...rest }) {
    // o rest operator serve para enviar as propriedades de um componente sem ter q especificar.
    //Por exemplo, o botao tem inumeras propriedades. Caso queira enviar alguma outra propriedade para o componente quando for utilizar, 
    //mas nao ter que especificar tudo aqui no jsx, essas propriedades estarao
    //todas dentro do rest. Dai as que quiser deixar explicitas pra fazer algo, é so colocar normal, assim como está agora.
    return (
        <Container
            type="button"
            disabled={loading}
            {...rest}
        >
            {loading ? "Carregando..." : title}
        </Container>
    )

}