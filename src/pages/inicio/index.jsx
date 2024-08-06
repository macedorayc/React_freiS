import { Link } from 'react-router-dom'
import Cabecalho from '../../components/cabecalho'
import './index.scss'

export default function Inicio() {
    return (
        <div className='pagina-inicio'>
            <Cabecalho />
            <section>
                <h1>Escolha um treino...</h1>

                <div className='exercicios'>
                <Link to = '/ex1'>
                    <div className='card'>
                        <div className='um'></div>
                     
                        <h2>Cupom de desconto</h2>
                       
                        <h3>Exercício 1</h3>
                    </div>
                    </Link>
                    
                    
                    <div className='card'>
                        <div className='dois'></div>
                        <Link to = '/ex2'>
                        <h2>Converter Kg/gramas</h2>

                        </Link>
                        <h3>Exercício 2</h3>
                    </div>
                     
                    
                    
                    <div className='card'>
                        <div className='tres'></div>
                        <Link to = '/ex3'>
                        <h2>Valor total por quantidade</h2>

                        </Link>
                        <h3>Exercício 3</h3>
                    </div>    
                   
                
                </div>
            </section>
        </div>
    )
}