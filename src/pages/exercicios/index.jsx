import "./index.scss"
import { useState } from 'react';
import { Link } from "react-router-dom";
import { lerNumero } from "../../utils/coverção";
import Cabecalho from "../../components/cabecalho";

export default function Exercicios() {
    const [kilo, setKilo] = useState(0);
    const [grm, setGrm] = useState(0);

    const [compra, setCompra] = useState(0);
    const [cupom, setCupom] = useState(0);
    const [desc, setDesc] = useState(0);

    const [p, setP] = useState(0);
    const [m, setM] = useState(0);
    const [g, setG] = useState(0);
    const [total, setTotal] = useState(0);


    function acai(){
        let r = [p * 13.5, m * 15, g * 17.5]
        let soma = 0
        for(let i = 0 ; i < r.length; i++){
             soma +=r[i]
        }
        
        setTotal(soma)

    }
    


    function grama() {

        let res = kilo * 1000

        setGrm(res)

    }

    function desconto() {

        let total = lerNumero(compra) - lerNumero(cupom)

        setDesc(total)

    }

    return (
        <div className="pagina-gramas pagina">
            <Cabecalho />
            <section className="secao">
                <div className="exe1">
                    <div className="seta">

                        <Link to='./' ><img src="/assets/images/download.png" alt="setinha" /></Link>
                        <h1>Exercício 01 - Cupom de desconto</h1>
                    </div>

                    <div className="vazia"></div>
                    <div className="semnada"></div>
                    <div className="gramas">
                        <h2>Informe o valor do pedido</h2>
                        <input className="texto" type="text" value={compra} onChange={e => setCompra(e.target.value)} />
                        <h2>Informe o valor do cupom</h2>
                        <input className="texto" type="text" value={cupom} onChange={e => setCupom(e.target.value)} />
                        <button onClick={desconto}>Executar</button>
                    </div>

                    <div className="total">
                    Resultado: O total é R$ {desc.toFixed(2)} 
                    </div>
                </div>
            </section>
            <section className="secao">
                <div className="exe2">
                    <div className="seta">

                        <Link to='./' ><img src="/assets/images/download.png" alt="setinha" /></Link>
                        <h1>Exercício 02 - Converter Kg/gramas</h1>
                    </div>

                    <div className="vazia"></div>
                    <div className="semnada"></div>
                    <div className="gramas">
                        <h2>Valor em gramas</h2>
                        <input className="texto" type="text" value={kilo} onChange={e => setKilo(e.target.value)} />
                        <button onClick={grama}>Executar</button>
                    </div>

                    <div className="total">
                        O total é {grm} gramas
                    </div>
                </div>


            </section>

            <section className="secao">
            <div className="exe3">
                <div className="seta">
                    <Link to="./">
                        <img src="/assets/images/download.png" alt="setinha" />
                    </Link>
                    <h1>Exercício 03 - Valor total por quantidade</h1>
                </div>

                <div className="vazia"></div>
                <div className="semnada"></div>
                <div className="gramas">
                    <div className="input">
                        <div className="acai">
                            <h2>Quantidade pequeno</h2>
                            <input
                                className="texto"
                                type="text"
                                value={p}
                                onChange={e => setP(e.target.value)}
                            />
                        </div>
                        <div className="acai">
                            <h2>Quantidade médio</h2>
                            <input
                                className="texto"
                                type="text"
                                value={m}
                                onChange={e => setM(e.target.value)}
                            />
                        </div>
                        <div className="acai">
                            <h2>Quantidade grande</h2>
                            <input
                                className="texto"
                                type="text"
                                value={g}
                                onChange={e => setG(e.target.value)}
                            />
                        </div>
                    </div>
                    <button onClick={acai}>Executar</button>
                </div>

                <div className="total">
                Resultado: O total é R$ {total}
                </div>
            </div>
        </section>

        </div>
    );

}