import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/inicio';
import Exercicios from './pages/exercicios';
import Sobre from './pages/sobre';



export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/exercicios' element={<Exercicios />} />
                <Route path='/sobre' element={<Sobre />} />
               
            </Routes>
        </BrowserRouter>
    );
}
