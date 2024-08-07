import './index.scss';
import { Link } from 'react-router-dom';


export default function Exesdiv(props) {
    return (

        <div className='pagina-divs'>
            <Link to= {props.Link}>
                <div className='card'>
                    <div className='cor'style={{ backgroundColor: props.color }}></div>
                    <h2>{props.h2}</h2>
                    <h3>{props.h3}</h3>
                </div>
            </Link>
        </div>

    );

}