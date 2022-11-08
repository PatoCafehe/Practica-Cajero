import Teclado from '../components/Teclado';
import CancelarBtn from '../components/CancelarBtn';
const Deposito = () => {
  return (
    <div className="containe m-auto mt-12">
      <div className="border-2 border-solid border-slate-400 w-4/6 m-auto">
        <header>
          <h1 className="text-center text-2xl font-semibold mt-6">Deposito</h1>
        </header>
        <div className="flex justify-between items-center">
          <div className="grid grid-cols-2   w-1/3 px-8  ">
            {/* label pesos */}
            <p className="text-center text-sm font-semibold">
              <label htmlFor="pesos">
                PESOS
                <p className="mt-2">
                  <input
                    type="number"
                    name="pesos"
                    id=""
                    placeholder="$ 100"
                    className="w-28 text-md font-medium mb-3 text-center border-none"
                  />
                </p>
                <p>
                  <input
                    type="number"
                    name="pesos"
                    id=""
                    placeholder="$ 200"
                    className="w-28 text-md font-medium mb-3 text-center border-none"
                  />
                </p>
                <p>
                  <input
                    type="number"
                    name="pesos"
                    id=""
                    placeholder="$ 500"
                    className="w-28 text-md font-medium mb-3 text-center border-none"
                  />
                </p>
                <p>
                  <input
                    type="number"
                    name="pesos"
                    id=""
                    placeholder="$ 1000"
                    className="w-28 text-md font-medium mb-3 text-center border-none"
                  />
                </p>
              </label>
            </p>
            {/* label cantidad */}
            <p className="text-center text-sm font-semibold">
              <label htmlFor="">
                CANTIDAD
                <p className="mt-2">
                  <input
                    type="number"
                    name="pesos"
                    id=""
                    placeholder="2"
                    className="w-2/4 text-md font-medium text-center mb-3 border-blue-600 text-black bg-rose-100 "
                  />
                </p>
                <p>
                  <input
                    type="number"
                    name="pesos"
                    id=""
                    placeholder="2"
                    className="w-2/4 text-md font-medium text-center mb-3 border-blue-600 text-black bg-rose-100 "
                  />
                </p>
                <p>
                  <input
                    type="number"
                    name="pesos"
                    id=""
                    placeholder="2"
                    className="w-2/4 text-md font-medium text-center mb-3 border-blue-600 text-black bg-rose-100 "
                  />
                </p>
                <p>
                  <input
                    type="number"
                    name="pesos"
                    id=""
                    placeholder="2"
                    className="w-2/4 text-md font-medium text-center mb-3 border-blue-600 text-black bg-rose-100 "
                  />
                </p>
              </label>
            </p>
          </div>
          {/* columna teclado numerico */}
          <div>
            <p className="text-center text-sm font-semibold mb-2">
              <label htmlFor="">
                {' '}
                MONTO A DEPOSITAR
                <p>
                  <input
                    type="number"
                    name=""
                    id=""
                    placeholder="Ej:$1000"
                    className="w-40 text-xl font-bold mb-3 text-center border-none text-black"
                  />
                </p>
              </label>
            </p>
            <Teclado />
          </div>
        </div>
        <div>
          <CancelarBtn />
        </div>
      </div>
    </div>
  );
};

export default Deposito;
