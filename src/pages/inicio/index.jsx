import "./index.scss"
import { useState } from 'react';

export default function Inicio() {
    const [kilo, setKilo] = useState(0);
    const [grm, setGrm] = useState(0);

    function grama() {

        let res = kilo * 1000

        setGrm(res)

    }

    return (
        <div className="pagina-inicio">
            <header className="cabeçalho">
                <div className="imh1">
                    <img className="frei" src="/assets/images/logo_frei.png" alt="Frei" />
                    <h1>React FreiS</h1>
                </div>

                <nav>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Sobre</a></li>
                    </ul>
                </nav>

            </header>
            <section className="secao">
                <h1>
                    Exercício 02 - Converter Kg/gramas
                </h1>
                <div>
                    <h2>Valor em gramas</h2>
                    <input type="text" value={kilo} onChange={e => setKilo(e.target.value)} />
                    <button onClick={grama}>Executar</button>
                </div>
                <div>
                    o total é {grm} gramas
                </div>
            </section>

        </div>
    );

}