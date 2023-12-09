import { Container, Links, Content } from "./styles.js"
import { Button } from '../../components/Button'
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag/index.jsx"
import { ClickableText } from "../../components/ClickableText/index.jsx"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from "../../services/api.js"


export function Details() {
  const params = useParams()
  const [noteData, setData] = useState(null)
  const navigate = useNavigate()

  async function handleDelete() {
    const confirmation = window.confirm("You really want to delete this note?")

    if (confirmation) {
      api.delete(`/note/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchNoteById() {
      const response = await api.get(`/note/${params.id}`)
      setData(response.data)
    }

    fetchNoteById()
  }, [])


  return (
    <Container>
      <Header />

      {
        noteData &&
        <main>
          <Content>
            <ClickableText title="Delete note" onClick={handleDelete} />

            <h1>{noteData.title}</h1>

            <p>
              {noteData.description}
            </p>

            {noteData.links &&
              <Section title="Useful links">
                <Links>
                  {
                    noteData.links.map(link => (
                      <li key={String(link.id)}>
                        <a href={link.url} target="_blank">
                          {link.url}
                        </a>
                      </li>
                    ))
                  }
                </Links>
              </Section>
            }

            {
              noteData.tags &&
              <Section title="Tags">
                {
                  noteData.tags.map(tag => (
                    <Tag key={tag.id} title={tag.name} />
                  ))
                }

              </Section>
            }
            <Button title="Back" onClick={() => navigate(-1)} />

          </Content>
        </main>
      }
    </Container>
  )
}