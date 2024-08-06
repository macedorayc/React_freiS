import './index.scss'
import Cabecalho from '../../../components/cabecalho'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Conversao() {

    const [gramas, setGramas] = useState(0)
    const [resultado, setResultado] = useState(0)


    function converter () {
        
        setResultado(gramas.replaceAll(',','.') * 1000)
    }

    return (
        <div className='pagina-ex2'>
               <Cabecalho />

            <section className='titulo'>
                <Link to = '/'>
                <img src="/assets/images/voltar.png" alt="" />
                </Link>
                
                <h1>Exercício 02 - Converter Kg/gramas</h1>

                
            </section>

            <div className='divisao'></div>

            <section className='quadro'>
                <p>Implementar um programa em <b>Javascript</b> para <b>converter kilos em gramas.</b></p>
            </section>

            <section className='ex'>

                <div className='card'>
                <h2>Valor em kilogramas</h2>
                <input type="text" value={gramas} onChange={e => setGramas(e.target.value)}/>

                <div>
                <button onClick={converter} >Executar</button>
                </div>
                

                </div>
                <h3>Resultado: o total é {resultado} gramas</h3>
            </section>
        </div>
    )
}