import { Link } from 'react-router-dom'
import Cabecalho from '../../components/cabecalho'
import './index.scss'

export default function Inicio() {
    return (
        <div className='pagina-inicio'>
            <Cabecalho />
            <div className='menu'>
                <div className='titulo'>
                    <h2>Escolha um treino...</h2>
                </div>
                <div className='cards'>
                    <Link to='/exercicios' className='link'>
                        <div className='card'>
                            <div className='retangulo laranja' />
                            <h3 className='titulo'>Cupom de desconto</h3>
                            <h4 className='subtitulo'>Exercício 1</h4>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}