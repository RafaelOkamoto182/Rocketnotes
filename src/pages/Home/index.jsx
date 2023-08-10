import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'
import { ClickableText } from '../../components/ClickableText'

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li><ClickableText title="todos" /></li>
                <li><ClickableText title="nodejs" /></li>
                <li><ClickableText title="react" /></li>
            </Menu>

            <Search>
            </Search>

            <Content>

            </Content>

            <NewNote>

            </NewNote>

        </Container>


    )
}