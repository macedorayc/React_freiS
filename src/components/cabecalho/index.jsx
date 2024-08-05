import './index.scss';
import { Link } from 'react-router-dom';


export default function Cabecalho() {
    
    return(
        
        <header className="cabeçalho">
            <div className="imh1">
                <img className="frei" src="/assets/images/logo_frei.png" alt="Frei" />
                <h1>React FreiS</h1>
            </div>

            <nav>
                <ul>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='/sobre'>Sobre</Link></li>
                </ul>
            </nav>

        </header>
    );
}