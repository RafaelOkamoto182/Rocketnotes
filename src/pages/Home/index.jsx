import { FiPlus } from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'
import { ClickableText } from '../../components/ClickableText'
import { Input } from '../../components/Input'

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li><ClickableText title="todos" isactive /></li>
                <li><ClickableText title="nodejs" /></li>
                <li><ClickableText title="react" /></li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" />
            </Search>

            <Content>

            </Content>

            <NewNote>
                <FiPlus />
                Criar nota
            </NewNote>

        </Container>


    )
}