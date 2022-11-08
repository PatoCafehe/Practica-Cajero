import CancelarBtn from '../components/CancelarBtn';

const Bienvenido = () => {
  return (
    <div className="mt-10 mr-10 ml-10 max-h-fit border-2 border-gray-500">
      <div>
        <p className=" font-medium text-3xl text-center p-4 ">
          Bienvenido Patricio
        </p>
        <p className=" font-semibold text-xl text-center mt-2 ">
          ¿Que operación deseas realizar?
        </p>

        <div className="grid gap-6">
          <div className="flex justify-between">
            <button
              type="text"
              value="Extraccion"
              className=" bg-slate-400 p-2 m-auto mt-10  text-white font-medium text-lg  w-1/3"
            >
              Extracción
            </button>

            <button
              type="btn"
              value="Extraccion"
              className=" bg-slate-400 p-2 m-auto mt-10 text-white font-medium text-lg w-1/3"
            >
              Depósito
            </button>
          </div>
          <div className="grid justify-items-center">
            <button
              type="btn"
              value="Extraccion"
              className=" bg-slate-400 p-2 m-auto mt-4 mb-40 w-1/3 max-w-xl  text-white font-medium text-lg"
            >
              Consulta de Saldo
            </button>
          </div>
          <div>
            <CancelarBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bienvenido;
