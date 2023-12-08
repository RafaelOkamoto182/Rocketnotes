import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'

import { Link } from 'react-router-dom'
import { useState } from 'react'

import { Container, Form } from './styles'

export function New() {
    const [linkArray, setLinkArray] = useState([])
    const [newLink, setNewLink] = useState("")

    function handleAddLink() {
        setLinkArray(prevState => [...prevState, newLink])
        setNewLink("")
    }

    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Create a note</h1>
                        <Link to="/">Back</Link>
                    </header>

                    <Input placeholder="Title" />
                    <TextArea placeholder="Details" />

                    <Section title="Useful Links">
                        {
                            linkArray.map((link, index) =>
                                <NoteItem
                                    key={String(index)}
                                    value={link}
                                    onClick={() => { }}
                                />
                            )
                        }
                        <NoteItem
                            isnew="true"
                            placeholder="New Link"
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
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