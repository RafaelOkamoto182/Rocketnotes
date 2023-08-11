import { FiPlus } from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'
import { ClickableText } from '../../components/ClickableText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'

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
                <Input placeholder="Pesquisar pelo título" />
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data={
                        {
                            title: 'React',
                            tags: [
                                { id: '1', name: 'react' },
                                { id: '2', name: 'frontend' }
                            ]
                        }
                    } />

                </Section>

            </Content>

            <NewNote>
                <FiPlus />
                Criar nota
            </NewNote>

        </Container>


    )
}