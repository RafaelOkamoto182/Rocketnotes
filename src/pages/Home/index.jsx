import { FiPlus } from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'
import { ClickableText } from '../../components/ClickableText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export function Home() {
    const [tagList, setTagList] = useState([])
    const [selectedTags, setSelectedTags] = useState([])
    const [searchBar, setSearchBar] = useState("")
    const [notes, setNotes] = useState([])

    const navigate = useNavigate()

    function handleSelectedTags(tagName) {
        //se a tag clicada for o All, zera o vetor de tags, voltando a seleção pro All
        if (tagName === "All") {
            return setSelectedTags([])
        }

        if (selectedTags.includes(tagName)) {
            const filteredTags = selectedTags.filter(tag => tag !== tagName)
            setSelectedTags(filteredTags)
        } else {
            setSelectedTags(prevState => [...prevState, tagName])
        }

    }

    function handleOpenNote(id) {
        navigate(`/details/${id}`)
    }

    //o useEffect nao aceita um async na frente, entao precisa chamar uma async function caso queira fazer algo assincrono
    useEffect(() => {
        async function fetchTagList() {
            const response = await api.get("/tag")
            setTagList(response.data)
        }

        fetchTagList()

    }, [])

    useEffect(() => {

        async function fetchNotes() {
            try {
                const response = await api.get(`/note?title=${searchBar}&tags=${selectedTags}`)
                setNotes(response.data)
            } catch (error) {
                console.log(error.message)
            }
        }

        fetchNotes()

    }, [selectedTags, searchBar])
    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li>
                    <ClickableText
                        title="All"
                        isactive={selectedTags.length === 0}
                        onClick={() => handleSelectedTags("All")}
                    />
                </li>
                {
                    tagList && tagList.map(tag => (
                        <li key={String(tag.id)}>
                            <ClickableText
                                title={tag.name}
                                onClick={() => handleSelectedTags(tag.name)}
                                isactive={selectedTags.includes(tag.name)}
                            />
                        </li>
                    ))
                }

            </Menu>

            <Search>
                <Input
                    placeholder="Search by title"
                    onChange={e => setSearchBar(e.target.value)}
                />
            </Search>

            <Content>
                <Section title="My notes">

                    {
                        notes.map(note => (
                            <Note
                                key={note.id}
                                data={note}
                                onClick={() => handleOpenNote(note.id)}
                            />
                        ))

                    }

                </Section>

            </Content>

            <NewNote to='/new'>
                <FiPlus />
                New Note
            </NewNote>

        </Container>


    )
}