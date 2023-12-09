import React from 'react'
import './integral.css'
import Header from '../../ui/components/header/Header'
import Footer from '../../ui/components/footer/Footer'
import Banner from '../../ui/components/banner/Banner'
import Paragraph from '../../ui/components/paragraph/Paragraph'
/* import integralIndefinida from './img/integral-indefinida.png'
import integralIndefinida1 from './img/integral-indefinida1.gif'
import integralIndefinida2 from './img/integral-indefinida2.gif'
import integralIndefinida3 from './img/integral-indefinida3.gif'
import integralDefinida from './img/integral-definida.png'
import integralDefinida1 from './img/integral-definida1.gif'
import integralDefinidaSemC from './img/integral-definida-semC.png' */

function Integral() {
  return (
    <div className="container">
      <Header />
      <div className="mainContainer">
        <Banner text="Integral" />
        <div className="integral-indefinida">
          <div className='secao-indefinida'>
            <Paragraph title="Integral Indefinida" content="Uma integral é dita indefinida quando não se conhece os limites de integração, ou seja, o intervalo no qual ela está sendo integrada." />
            <p>Exemplo:</p>
            {/* <img src={integralIndefinida} /> */}
            <Paragraph content="Na integração indefinida, a função resultante será a função integrada F(x), sendo necessário somá-la a uma constante, chamada de constante de integração" />
            <p>onde:</p>
            <ul>
              <li>
                <Paragraph content="&#8747; representa o símbolo de integração." />
              </li>
              <li>
                <Paragraph content="f(x) é a função a ser integrada." />
              </li>
              <li>
                <Paragraph content="dx indica a variável de integração (neste caso, x)." />
              </li>

              <li>
                <Paragraph content="C representa uma família de soluções, refletindo a ideia de que a derivada de uma constante é zero." />
              </li>
            </ul>
            <Paragraph title="Propriedades da Integral Indefinida" content=" São imediatas as seguintes propriedades:" />
            <ul className="listIntegrais">
              <li>
                <p>1°:</p>
                {/* <img className='img1' src={integralIndefinida1} /> */}
                <Paragraph content=", ou seja, a integral da soma ou diferença é a soma ou diferença das integrais." />
              </li>
              <li>
                <p>2°:</p>
                {/* <img className='img1' src={integralIndefinida2} /> */}
                <Paragraph content=", ou seja, a constante multiplicativa pode ser retirada do integrando." />
              </li>
              <li>
                <p>3°:</p>
                {/* <img className='img1' src={integralIndefinida3} /> */}
                <Paragraph content=", ou seja, a derivada da integral de uma função é a própria função." />
              </li>
            </ul>
          </div>

          <div className="video-indefinida">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/M_xCxHcBdBo?si=KJQsHo4WvtWbXfMK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

        <div className="integral-definida">
          <div className='secao-definida'>
            <Paragraph title="Integral Definida" content="Diferentemente da integral indefinida, os limites da integral definida já estão estabelecidos, para resolvê-la, basta encontrar a integral da função em questão, e neste resultado substituir os valores dos limites superior e inferior. " />
            <p>Exemplo:</p>
            {/* <img src={integralDefinida} /> */}
            <Paragraph content="Como as constantes de integração são iguais, a integral definida é a subtração das funções primitivas substituídas pelos limites superior e inferior, neste caso (B e A respectivamente). Resultando em:" />
            {/* <img src={integralDefinidaSemC} /> */}
            <Paragraph title="Propriedades da Integral Definida" />
           {/*  <img className='last-img' src={integralDefinida1} /> */}
          </div>

          <div className="video-definida">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/CWWbjoOjYOg?si=CEfvcX44AWCOArXr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Integral