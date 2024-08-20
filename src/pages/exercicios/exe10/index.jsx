import './index.scss'
import Cabecalho from '../../../components/cabecalho'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Imc() {

    const [ peso , setPeso] = useState(0)
    const [ altura, setAltura] = useState(0)
    const [imc, setImc] = useState(0)
    const [situacao, setSituacao] = useState(0)
    const [ resultado, setResultado] = useState([])



    
    function AdicionarImc() {
            const pesoNum = Number(peso);
            const alturaNum = Number(altura);
    
            const imc2 = pesoNum / (alturaNum * alturaNum);
    
            let situacaoTexto = '';
            if (imc2 < 18.5) {
                situacaoTexto = 'Você está abaixo do peso.';
            } else if (imc2 >= 18.5 && imc2 <= 24.9) {
                situacaoTexto = 'Você está com peso normal';
            } else if (imc2 >= 25 && imc2 <= 29.9) {
                situacaoTexto = 'Você está acima do peso.';
            } else {
                situacaoTexto = 'Você está com obesidade.';
            }
    
            setImc(imc2.toFixed(2));
            setSituacao(situacaoTexto);
    
            const imc3 = {
                Altura: alturaNum,
                Peso: pesoNum,
                Situação: situacaoTexto,
                Imc: imc2.toFixed(2),
            };
    
            setResultado([...resultado, imc3]);
            setPeso('');
            setAltura('');
        }
    
    

    return (
        <div className='pagina-ex10 pagina'>
               <Cabecalho />

            <section className='titulo'>
                <Link to = '/'>
                <img src="/assets/images/voltar.png" alt="" />
                </Link>
                
                <h1>Exercício 10 - IMC</h1>

                
            </section>

            <div className='divisao'></div>

            <section className='quadro'>
                <p>Implementar um programa em <b>Javascript</b> que a partir da altura e do peso de uma pessoa <b> calcule o IMC e avalie a faixa correspondente a tabela ao lado.</b></p>
            </section>

            <section className='ex'>
                <div className='card'>

                    <div className='inf'>
                        <h2>Informe seu peso</h2>
                        <input type="text" value={peso} onChange={e => setPeso(e.target.value)} />
                    </div>

                        <div className='inf'> 
                            <h2>Informe sua altura</h2>
                            <input type="text" value={altura} onChange={e => setAltura(e.target.value)} />
                        </div>

                    <div>
                        <button onClick={AdicionarImc} >Executar</button>
                    </div>


                </div>
                
                <div className='objeto'>
                    {resultado.map((item, pos) => (
                        <div className='imc' key={pos}>
                            <h1>
                                Altura: {item.Altura}, Peso: {item.Peso}, IMC: {item.Imc}, Situação: {item.Situação}
                            </h1>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}