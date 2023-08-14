import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'

import { Container, Form } from './styles'

export function New() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Create a note</h1>
                        <a href="/">Back</a>
                    </header>

                    <Input placeholder="Title" />
                    <TextArea placeholder="Details" />

                    <Section title="Useful Links">
                        <NoteItem value="sitesitesite" />
                        <NoteItem placeholder="New Link" isnew="true" />
                    </Section>

                    <Section title="Tags">
                        <div className='tags'>
                            <NoteItem value="react" />
                            <NoteItem placeholder="New Tag" isnew="true" />
                        </div>
                    </Section>

                    <Button title="Save" />



                </Form>
            </main>


        </Container>
    )
}