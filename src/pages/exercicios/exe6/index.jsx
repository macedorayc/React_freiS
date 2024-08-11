import Cabecalho from '../../../components/cabecalho'
import './index.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Salario() {

    const [salario, setSalario] = useState(0)
    const [bonus, setBonus] = useState(0)
    const [desconto, setDesconto] = useState(0)
    const [tpp, setTpp] = useState(0)
   

    function Tpp() {
      
        const sal = Number(salario) ;
        const bun = Number(bonus) ;
        const des = Number(desconto) ;

        let sa = (sal*bun/100) + sal
        let fin = (sa - des).toFixed(2)

       
        setTpp(fin);
        setSalario(0);
        setBonus(0);
        setDesconto(0);
    }

    return (
        <div className='pagina-ex6 pagina'>
            <Cabecalho />
            <section className='titulo'>
                <Link to='/'>
                    <img src="/assets/images/voltar.png" alt="" />
                </Link>
                <h1>Exercício 06 - Calculo de Salario liquido</h1>
            </section>

            <div className='divisao'></div>

            <section className='quadro'>
                <p>Implementar um programa em Javascript para <b>calcular o salario liquido</b> de um funcionario, a partir de seu salario base, o bonus mensal em porcentagem e total desconto do em reais</p>
            </section>

            <section className='ex'>
                <div className='card'>
                    <div className='conteudo'>
                        <div className='qtd'>
                            <h2>Salario</h2>
                            <input type="text" value={salario} onChange={e => setSalario(e.target.value)} />
                        </div>
                        <div className='qtd'>
                            <h2>Bonus</h2>
                            <input type="text" value={bonus} onChange={e => setBonus(e.target.value)} />
                        </div>
                        <div className='qtd'>
                            <h2>Desconto</h2>
                            <input type="text" value={desconto} onChange={e => setDesconto(e.target.value)} />
                        </div>    
                    </div>

                    <div>
                        <button onClick={Tpp}>Executar</button>
                    </div>
                </div>

                <h3>Seu sálario liquido é de R$ {tpp}</h3>
              
            </section>
        </div>
    )
}
