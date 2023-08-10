import { Container, Links } from "./styles.js"
import { Button } from '../../components/Button'
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag/index.jsx"
import { ClickableText } from "../../components/ClickableText/index.jsx"


export function Details() {
  return (
    <Container>
      <Header />

      <ClickableText title="Excluir nota" />

      <Section title="Links úteis">
        <Links>
          <li><a href="#">https://www.rocketseat.com.br</a></li>
          <li><a href="#">https://www.rocketseat.com.br</a></li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express" />
        <Tag title="nodejs" />
      </Section>

      <Button title="voltar" />

    </Container>
  )
}