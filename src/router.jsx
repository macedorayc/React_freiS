import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/inicio';
import Sobre from './pages/sobre';
import Cupom from './pages/exercicios/exe1';
import Conversao from './pages/exercicios/exe2';
import TotalQtd from './pages/exercicios/exe3';
import Livro from './pages/exercicios/exe4';



export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/ex1' element={<Cupom />} />
                <Route path='/ex2' element={<Conversao />} />
                <Route path='/ex3' element={<TotalQtd />} />
                <Route path='/ex4' element={<Livro />} />
                <Route path='/sobre' element={<Sobre />} />

            </Routes>
        </BrowserRouter>
    );
}
