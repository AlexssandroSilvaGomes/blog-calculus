import React from 'react'
import '../../ui/styles/global.css'
import './inicio.css'
import Header from '../../ui/components/header/Header'
import Banner from '../../ui/components/banner/Banner'
import Paragraph from '../../ui/components/paragraph/Paragraph'
import Footer from '../../ui/components/footer/Footer'

function Inicio() {
  return (
    <div className="container">
      <Header />
      <div className="mainContainer">
        <Banner text="WebQuest" />
        <Paragraph title="Introdução" content="Este site foi desenvolvido por Alexssandro da Silva Gomes, estudante do 2º semestre de Análise e Desenvolvimento de Sistemas (noturno), para a matéria de Cálculo, ministrada pelo professor Luciano Condori na Fatec Carapicuíba." />
        <Paragraph title="Objetivo" content="A pretensão deste blog é tanto mostrar os conhecimentos referentes a disciplina adquiridos dentro e fora da sala de aula, como também resumir em um só lugar o conteúdo básico da mesma, podendo ou não ajudar qualquer um que esteja interessado em aprender sobre cálculo - em especial outros estudantes da disciplina." />
        <Paragraph title="Conclusão" content="Durante o desenvolvimento deste trabalho, pude enriquecer meu entendimento sobre a disciplina de cálculo, especialmente ao explorar sua história, evolução e ampla gama de aplicações. A jornada revelou a complexidade e a importância dos métodos de cálculo atuais, destacando o esforço ao longo do tempo e a contribuição significativa de diversos matemáticos. Além disso, destaco as diversas aplicações práticas do cálculo, transcendendo a matemática pura e abrangendo áreas como química, física, astronomia e até mesmo situações cotidianas, como a determinação de lucros e o empilhamento de caixas. Ao concluir as pesquisas, fica evidente a relevância crítica do cálculo integral e derivada, mesmo que seu uso diário não seja tão comum. Aprofundar-me nessas ferramentas matemáticas proporcionou insights valiosos sobre a compreensão e modelagem de fenômenos em diversas disciplinas, desde física e engenharia até economia e ciências da computação. Os resultados ressaltam a notável versatilidade do cálculo, permitindo a análise de taxas de variação, acumulação de grandezas e a resolução de desafios complexos. Em breve, pretendo aplicar os conhecimentos adquiridos ao longo deste semestre e na elaboração deste trabalho em minha área de atuação, potencialmente contribuindo para o desenvolvimento de software voltado para aplicações econômicas." />
        <Paragraph title="Referências" />
        <ul className='refs'>
          <li>
            <a href="https://phylos.net/2017-12-18/a-historia-do-calculo" target="_blank">phylos - pesquisa sobre a história</a>
          </li>
          <li>
            <a href="https://www.somatematica.com.br/superior/integrais/integrais5.php" target="_blank">somatematica - definição de integral definida</a>
          </li>
          <li>
            <a href="https://fontana.paginas.ufsc.br/files/2017/02/Material-de-Apoio-Integrais-Metodos.pdf" target="_blank">material de apoio para integrais</a>
          </li>
          <li>
            <a href="https://www.somatematica.com.br/superior/integrais/integrais.php" target="_blank">somatematica - definição de integral indefinida</a>
          </li>
          <li>
            <a href="https://wwwp.fc.unesp.br/~arbalbo/arquivos/derivadas.pdf" target="_blank">material de apoio para derivadas</a>
          </li>
          <li>
            <a href="https://mundoeducacao.uol.com.br/matematica/regras-derivacao.htm" target="_blank">mundoeducacao - regras sobre derivadas</a>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Inicio