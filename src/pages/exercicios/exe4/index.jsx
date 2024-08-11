import Cabecalho from '../../../components/cabecalho'
import './index.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Livro() {

    const [nome, setNome] = useState('')
    const [pagina, setPagina] = useState(0)
    const [tempo, setTempo] = useState(0)
    const [tpp, setTpp] = useState(0)
    const [mostrarNome, setMostrarNome] = useState('') 

    function Tpp() {
    
        const totalTempo = (pagina * tempo / 3600).toFixed(2);
        setTpp(totalTempo);
        setMostrarNome(nome);
        
        
        setPagina(0);
        setTempo(0);
        setNome('');
    }

    return (
        <div className='pagina-ex4 pagina'>
            <Cabecalho />
            <section className='titulo'>
                <Link to='/'>
                    <img src="/assets/images/voltar.png" alt="" />
                </Link>
                <h1>Exercício 04 - Valor total por quantidade</h1>
            </section>

            <div className='divisao'></div>

            <section className='quadro'>
                <p>Implementar um programa em Javascript para <b>calcular</b> o tempo que um livro será lido por pessoa a partir do nome do livro, o total de páginas e o tempo em segundos de leitura por página</p>
            </section>

            <section className='ex'>
                <div className='card'>
                    <div className='conteudo'>
                        <div className='qtd'>
                            <h2>Nome do Livro</h2>
                            <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
                        </div>
                        <div className='qtd'>
                            <h2>Páginas</h2>
                            <input type="text" value={pagina} onChange={e => setPagina(e.target.value)} />
                        </div>
                        <div className='qtd'>
                            <h2>Segundos</h2>
                            <input type="text" value={tempo} onChange={e => setTempo(e.target.value)} />
                        </div>    
                    </div>

                    <div>
                        <button onClick={Tpp}>Executar</button>
                    </div>
                </div>

             <h3>Terminará de ler {mostrarNome} em: {tpp}h</h3>
            </section>
        </div>
    )
}
