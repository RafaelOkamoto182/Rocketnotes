import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'

import { api } from '../../services/api'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Container, Form } from './styles'
import { ClickableText } from '../../components/ClickableText'

export function New() {
    const [noteTitle, setNoteTitle] = useState("")
    const [noteDescription, setNoteDescription] = useState("")

    const [linkArray, setLinkArray] = useState([])
    const [newLink, setNewLink] = useState("")

    const [tagArray, setTagArray] = useState([])
    const [newTag, setNewTag] = useState("")

    const navigate = useNavigate()

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

    function handleRemoveTag(tagToRemove) {
        setTagArray(prevState => prevState.filter(tag => tag !== tagToRemove))
    }

    async function handleSaveNote() {
        if (!noteTitle) {
            return alert("Please, add a title to your note")
        }
        if (newLink) {
            return alert("There's a link to be added. Please, click the add button or leave the field blank")
        }

        if (newTag) {
            return alert("There's a tag to be added. Please, click the add button or leave the field blank")
        }

        await api.post("/note", {
            title: noteTitle,
            description: noteDescription,
            tags: tagArray,
            links: linkArray
        })

        alert("Note crated successfully!")
        navigate(-1)
    }

    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Create a note</h1>

                        <ClickableText title="Back" onClick={() => navigate(-1)} />
                    </header>

                    <Input placeholder="Title" onChange={e => setNoteTitle(e.target.value)} />
                    <TextArea placeholder="Description" onChange={e => setNoteDescription(e.target.value)} />

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
                                        onClick={() => handleRemoveTag(tag)}
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

                    <Button title="Save" onClick={handleSaveNote} />



                </Form>
            </main>


        </Container>
    )
}