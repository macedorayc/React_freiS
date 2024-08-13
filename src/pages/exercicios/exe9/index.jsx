import './index.scss'
import Cabecalho from '../../../components/cabecalho'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Sorvete() {

    const [gramas, setGramas] = useState(0)
    const [situacao, setSituacao] = useState(0)


    function sorv () {

        let situa = ''
        let gra
    
        if (gramas === 0){
            situa = 'Peso invalido'
        }
        
        else if (gramas < 1000){
           gra = gramas * 3.50/100

           situa = `O total a pagar é ${gra}`
        }
        
        else if (gramas >= 1000){
           gra = gramas*3.00/100
           situa = `O total a pagar é ${gra}`
        }     


        setSituacao (situa).toFixed(2)
        setGramas (0)
        
    }

    return (
        <div className='pagina-ex9 pagina'>
               <Cabecalho />

            <section className='titulo'>
                <Link to = '/'>
                <img src="/assets/images/voltar.png" alt="" />
                </Link>
                
                <h1>Exercício 09 - Sorveteria</h1>

                
            </section>

            <div className='divisao'></div>

            <section className='quadro'>
                <p>Implementar um programa em <b>Javascript</b> que <b> calcule o total a se pagar em uma compra na sorveteria, a partir do total de gramas comprado.</b></p>
            </section>

            <section className='ex'>

                <div className='card'>
                <h2>Informe o total de gramas</h2>
                <input type="text" value={gramas} onChange={e => setGramas(e.target.value)}/>

                <div>
                <button onClick={sorv} >Executar</button>
                </div>
                

                </div>
                <h3>O total a pagar é  R$ {situacao} </h3>
            </section>
        </div>
    )
}