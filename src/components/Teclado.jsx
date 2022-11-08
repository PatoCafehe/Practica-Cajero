import { useState } from 'react';

const Teclado = () => {
  const [valor, setValor] = useState('');
  console.log(valor);

  return (
    <form
      onClick={(e) => {
        e.preventDefault();
      }}
      className="grid grid-cols-3 gap-4 border-2 border-blue-600 mx-12 my-2 px-4 py-4 text-white font-medium"
    >
      <button
        className="transition ease-in-out delay-150 bg-orange-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-600 duration-300 w-24 p-2"
        value="1"
        onClick={(e) => setValor(Number(e.target.value))}
      >
        1
      </button>

      <button
        className="transition ease-in-out delay-150 bg-orange-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-600 duration-300 w-24 p-2"
        value="2"
        onClick={(e) => setValor(Number(e.target.value))}
      >
        2
      </button>
      <button
        className="transition ease-in-out delay-150 bg-orange-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-600 duration-300 w-24 p-2"
        value="3"
        onClick={(e) => setValor(Number(e.target.value))}
      >
        3
      </button>
      <button
        className="transition ease-in-out delay-150 bg-orange-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-600 duration-300 w-24 p-2"
        value="4"
        onClick={(e) => setValor(Number(e.target.value))}
      >
        4
      </button>
      <button
        className="transition ease-in-out delay-150 bg-orange-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-600 duration-300 w-24 p-2"
        value="5"
        onClick={(e) => setValor(Number(e.target.value))}
      >
        5
      </button>
      <button
        className="transition ease-in-out delay-150 bg-orange-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-600 duration-300 w-24 p-2"
        value="6"
        onClick={(e) => setValor(Number(e.target.value))}
      >
        6
      </button>
      <button
        className="transition ease-in-out delay-150 bg-orange-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-600 duration-300 w-24 p-2"
        value="7"
        onClick={(e) => setValor(Number(e.target.value))}
      >
        7
      </button>
      <button
        className="transition ease-in-out delay-150 bg-orange-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-600 duration-300 w-24 p-2"
        value="8"
        onClick={(e) => setValor(Number(e.target.value))}
      >
        8
      </button>
      <button
        className="transition ease-in-out delay-150 bg-orange-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-600 duration-300 w-24 p-2"
        value="9"
        onClick={(e) => setValor(Number(e.target.value))}
      >
        9
      </button>
      <button className="transition ease-in-out delay-150 bg-orange-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-600 duration-300 w-24 p-2">
        Borrar
      </button>
      <button
        className="transition ease-in-out delay-150 bg-orange-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-600 duration-300 w-24 p-2"
        value="0"
        onClick={(e) => setValor(Number(e.target.value))}
      >
        0
      </button>
      <button className="transition ease-in-out delay-150 bg-orange-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-600 duration-300 w-24 p-2">
        Continuar
      </button>
    </form>
  );
};

export default Teclado;
