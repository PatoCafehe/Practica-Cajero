import { useState } from 'react';
import Teclado from '../components/Teclado';

const Inicio = () => {
  const [dni, setDni] = useState('');
  const [clave, setClave] = useState('');

  return (
    <>
      <h1 className=" text-start uppercase mt-10 mb-10 p-10 text-2xl font-mono px-36">
        Ingrese DNI y Clave
      </h1>
      <div className=" sm:flex md:flex md:min-h-screen">
        <div className="md:w-1/4 text-center uppercase font-bold text-lg">
          <div className="grid">
            <input
              type="number"
              name="dni"
              placeholder="Ingrese su Dni"
              className="w-76 h-16 bg-slate-100 font-bold uppercase ml-36 mt-12 mb-4 text-center rounded-md"
              value={dni}
              onChange={(e) => setDni(Number(e.target.value))}
            ></input>
            <input
              type="password"
              name="clave"
              placeholder="Clave Numérica"
              className="w-76 h-16 bg-slate-100 font-bold uppercase ml-36  mb-4 text-center rounded-md"
              value={clave}
              onChange={(e) => setClave(Number(e.target.value))}
            ></input>
          </div>
        </div>

        <div className="max-w-lg md:w-3/4 ml-96 border-solid  h-full ">
          <Teclado />
        </div>
      </div>
    </>
  );
};
export default Inicio;
