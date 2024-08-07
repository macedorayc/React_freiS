import { Link } from 'react-router-dom'
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


                </div>
            </section>
        </div>
    )
}