import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Content } from "./index"

class Sobre extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Sobre" />
        <Content>
          <h2>Sobre a 01dev</h2>

          <p>
            A <a href="https://01dev.codes/">01dev</a> é uma iniciativa fundada
            por Luiz Almeida, vulgo{" "}
            <a href="https://instagram.com/lhas01dev">@lhas</a>.
          </p>

          <p>
            Produzimos conteúdo sobre assuntos em tendência no mundo do
            desenvolvimento e da tecnologia.
          </p>

          <p>
            Através de uma linguagem amigável e acessível, nossos artigos já
            ajudaram milhares de desenvolvedores pelo mundo a fora.
          </p>

          <p>
            Queremos ajudar a alavancar a carreira de todos que trabalham ou tem
            curiosidade na área de desenvolvimento.
          </p>

          <p>
            Além disso, queremos ser referência em conteúdos de ponta, propondo
            soluções para as questões técnicas que aparecem no dia-a-dia de um
            desenvolvedor(a).
          </p>

          <h2>Sobre o @lhas</h2>

          <p>Tenho 24 anos e moro em Porto Alegre.</p>
          <p>
            Sou carioca da gema e desenvolvedor com muito orgulho há 10 anos.
          </p>
          <p>
            Já trabalhei em todo tipo de empresa de tecnologia: de startup fundo
            de quintal até multinacionais listadas na Fortune 500.
          </p>
          <p>
            Minha maior especialidade é front-end, entretanto, tenho expertise
            nos mais variados segmentos: back-end, dev ops, infraestrutura,
            design, entre outros.
          </p>
          <p>
            Graças a esse envolvimento com os mais variados projetos e perfis de
            desenvolvedores, resolvi compartilhar com o mundo um pouco dos meus
            desafios diários com o resto da comunidade.
          </p>
          <p>
            Uma forma de retribuir todo o conhecimento que eu já tive acesso
            graças a outras pessoas que tiveram a mesma iniciativa.
          </p>

          <h2>Quero entrar em contato</h2>

          <p>
            Você pode falar comigo por e-mail:{" "}
            <a href="mailto:luizhrqas@gmail.com">luizhrqas@gmail.com</a>.
          </p>

          <p>
            Além disso, você pode me encontra nas redes sociais:{" "}
            <a
              href="https://www.linkedin.com/in/luizhrqas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            {" e "}
            <a
              href="https://www.instagram.com/lhas01dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </p>

          <p>
            A 01dev também tem uma página no Facebook.{" "}
            <a href="https://www.facebook.com/01dev.rocks/">
              Segue a gente lá!
            </a>
          </p>
        </Content>
      </Layout>
    )
  }
}

export default Sobre

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
