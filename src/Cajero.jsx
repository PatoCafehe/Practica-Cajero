import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Inicio from './Pages/Inicio';
import Bienvenido from './Pages/Bienvenido';
import Deposito from './Pages/Deposito';
import Extraccion from './Pages/Extraccion';
import OtroMonto from './Pages/OtroMonto';
import PaginaNoEncontrada from './Pages/PaginaNoEncontrada';

export default function Cajero() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/bienvenido" element={<Bienvenido />} />
        <Route path="/deposito" element={<Deposito />} />
        <Route path="/extraccion" element={<Extraccion />} />
        <Route path="/otromonto" element={<OtroMonto />} />
        <Route path="*" element={<PaginaNoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}
