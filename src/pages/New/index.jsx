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

    const [tagArray, setTagArray] = useState([])
    const [newTag, setNewTag] = useState("")

    function handleAddLink() {
        setLinkArray(prevState => [...prevState, newLink])
        setNewLink("")
    }

    function handleRemoveLink(linkToRemove) {
        setLinkArray(prevState => prevState.filter(link => link !== linkToRemove))
    }

    function handleAddTag() {
        setTagArray(prevState => [...prevState, newTag])
        setNewTag("")
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
                                    onClick={() => handleRemoveLink(link)}
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
                            {
                                tagArray.map((tag, index) => (
                                    <NoteItem
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => { }}
                                    />
                                ))
                            }
                            <NoteItem
                                isnew="true"
                                placeholder="New Tag"
                                value={newTag}
                                onChange={e => setNewTag(e.target.value)}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>

                    <Button title="Save" />



                </Form>
            </main>


        </Container>
    )
}