
import Cabecalho from '../../components/cabecalho'
import Exesdiv from '../../components/exesdiv'
import './index.scss'

export default function Inicio() {
    return (
        <div className='pagina-inicio'>
            <Cabecalho />
            <section>
                <h1>Escolha um treino...</h1>

                <div className='exercicios'>

                    <Exesdiv
                        Link='/ex1'
                        h2='Cupom de desconto'
                        h3='Exercício 1'
                        color='#FFCE37'
                    />

                    <Exesdiv
                        Link='/ex2'
                        h2='Converter Kg/gramas'
                        h3='Exercício 2'
                        color='#B3FF37'
                    />


                    <Exesdiv
                        Link='/ex3'
                        h2='Valor total por quantidade'
                        h3='Exercício 3'
                        color='#37FFF3'
                    />

                    <Exesdiv
                        Link='/ex4'
                        h2='Tempo por Pagina'
                        h3='Exercício 4'
                        color='#800DB0'
                    />


                </div>


            </section>

            <section>
                

                <div className='exercicios'>

                    <Exesdiv
                        Link='/ex5'
                        h2='Situação do Aluno'
                        h3='Exercício 5'
                        color='#b00d0d'
                    />

                    <Exesdiv
                        Link='/ex6'
                        h2='Calculo de Salario liquido'
                        h3='Exercício 6'
                        color='#00fA9a'
                    />


                    <Exesdiv
                        Link='/ex3'
                        h2='Valor total por quantidade'
                        h3='Exercício 3'
                        color='#37FFF3'
                    />

                    <Exesdiv
                        Link='/ex4'
                        h2='Tempo por Pagina'
                        h3='Exercício 4'
                        color='#800DB0'
                    />


                </div>


            </section>
        </div>
    )
}