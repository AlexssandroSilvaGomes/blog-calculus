import React from 'react'
import './derivada.css'
import Header from '../../ui/components/header/Header'
import Footer from '../../ui/components/footer/Footer'
import Banner from '../../ui/components/banner/Banner'
import Paragraph from '../../ui/components/paragraph/Paragraph'
/* import derivada from './img/derivada.png'
import derivada1 from './img/derivada1.png'
import derivada2 from './img/derivada3.png'
import derivada3 from './img/exercicio-resolvido-derivada-quociente.png' */


function Derivada() {
  return (
    <div className="container">
      <Header />
      <div className="mainContainer">
        <Banner text="Derivada" />
        <div className="derivadas">
          <div className='derivadas-texto'>
            <Paragraph title="Definição" content="Se uma função f é definida em um intervalo aberto contendo x0, então a derivada de f em x0, denotada por f'(x0), é dada por: " />
            {/* <img src={derivada} /> */}
            <Paragraph content="se este limite existir. &#916;x representa uma pequena variação em x, próximo de x0, ou seja, tomando x = x0 + &#916;x (&#916;x = x − x) , a derivada de f em x0 pode também se expressa por " />
            {/* <img src={derivada1} /> */}
            <div className='notacoes'>
              <p>Notações:</p>
              {/* <img src={derivada2} /> */}
            </div>
            <div className='regras'>
              <Paragraph title="Regras de Derivação" content="Sejam f (x) e g (x) funções deriváveis e seja a um número real qualquer. Então, valem as propriedades: " />
              <Paragraph content="i) Se f (x) = a, então f ' (x) = 0." />
              <Paragraph content="ii) Se f (x) = ax, então f ' (x) = a." />
              <Paragraph content="iii) (Regra do tombo) Se f (x) = xa, então f ' (x) = a·xa – 1." />
              <Paragraph content="iv) (Derivada da soma) [f (x) + g (x)]' = f ' (x) + g' (x)." />
              <Paragraph content="v) [af (x)]' = a·f ' (x)." />
              <Paragraph content="vi) (Regra do produto) [f (x) g (x)]' = f ' (x) g (x) + f (x) g' (x)." />
              <Paragraph content="vii) (regra do quociente):" />
            </div>
            {/* <img src={derivada3} /> */}
          </div>

          <div className="derivadas-video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/cWBEMN75IMc?si=Zkb4p2_JAJ0p1T3K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Derivada