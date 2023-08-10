import { Container, Links, Content } from "./styles.js"
import { Button } from '../../components/Button'
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag/index.jsx"
import { ClickableText } from "../../components/ClickableText/index.jsx"


export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ClickableText title="Excluir nota" />

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia praesentium dignissimos labore pariatur suscipit ipsum, deleniti cupiditate impedit. Quos quasi fugit incidunt nulla aliquid quo officiis deserunt libero perferendis? Veniam?
          </p>

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

        </Content>
      </main>

    </Container>
  )
}