import React from 'react'
import '../inicio/inicio.css'
import Header from '../../ui/components/header/Header'
import Banner from '../../ui/components/banner/Banner'
import Paragraph from '../../ui/components/paragraph/Paragraph'
import Footer from '../../ui/components/footer/Footer'

function HistoriaCalculo() {
  return (
    <div className="container">
      <Header />
      <div className="mainContainer">
        <Banner text="Breve resumo da História do Cálculo" />
        <Paragraph content="A história do cálculo é uma jornada que percorre séculos e várias culturas. Na Antiguidade, os babilônios e gregos exploraram conceitos relacionados a limites e equações. Durante o Renascimento, matemáticos como Kepler e Viète desenvolveram técnicas precursoras. No século XVII, Newton e Leibniz formularam as bases do cálculo diferencial e integral de maneira independente. Ao longo dos séculos XVIII e XIX, Euler, Lagrange e outros refinaram e formalizaram esses métodos, tornando o cálculo essencial para a física e engenharia. No século XX, o cálculo evoluiu com a teoria da medida, integração Lebesgue e teoria dos conjuntos, enquanto a computação trouxe novas perspectivas com o cálculo numérico. Hoje, o cálculo permanece uma ferramenta fundamental em diversas disciplinas científicas, continuando a evoluir com novas aplicações e abordagens." />
        <Paragraph title="Cálculo Diferencial:" content="O cálculo diferencial concentra-se nas taxas de variação e inclinações de curvas. Seu principal objetivo é determinar as derivadas das funções, que representam a taxa de mudança instantânea de uma variável em relação a outra. A notação padrão para a derivada de uma função f(x) em relação a x é f'(x) ou df/dx. Este ramo do cálculo é amplamente aplicado na análise de movimento, otimização de funções, modelagem de fenômenos físicos e no estudo do comportamento local das funções." />
        <Paragraph title="Cálculo Integral:" content='Por outro lado, o cálculo integral lida com a acumulação de quantidades e a determinação de áreas sob curvas. Envolve o cálculo de integrais definidas e indefinidas. A notação comum para a integral definida de uma função f(x) de a a b é &#8747;f(x) dx, enquanto a antiderivada (ou integral indefinida) de f(x) é representada por &#8747;f(x) dx. Este ramo é amplamente utilizado para calcular áreas sob curvas, resolver problemas de acumulação, encontrar o centro de massa e resolver equações diferenciais. Juntos, o cálculo diferencial e integral formam uma base essencial para a compreensão matemática e modelagem de fenômenos naturais, científicos e econômicos.' />
      </div>
      <Footer />
    </div>
  )
}

export default HistoriaCalculo