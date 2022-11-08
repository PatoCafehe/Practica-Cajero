const Extraccion = () => {
  return (
    <div className="container m-auto mt-10">
      <div className="border-2 border-solid border-gray-400">
        <p className="text-center text-3xl mt-2 py-10">Extracción</p>
        <div className="grid">
          <div className="flex justify-between px-8 py-8">
            <table className="border border-solid border-blue-800 w-1/3 ">
              <tbody>
                <tr className=" text-xl font-sans font-semibold">
                  <input
                    type="radio"
                    name="cantidad"
                    id=""
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ml-8"
                  />
                  {''} $500
                </tr>
                <tr className=" text-xl font-sans font-semibold">
                  <input
                    type="radio"
                    name="cantidad"
                    id=""
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ml-8"
                  />
                  {''} $2.000
                </tr>
                <tr className=" text-xl font-sans font-semibold">
                  <input
                    type="radio"
                    name="cantidad"
                    id=""
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ml-8 "
                  />
                  {''} $3.000
                </tr>
              </tbody>
            </table>
            {/* Segunda Tabla */}
            <table className="border border-solid border-blue-800 w-1/3 h-40">
              <tbody>
                <tr className=" text-xl font-sans font-semibold">
                  <p>
                    <input
                      type="radio"
                      name="cantidad"
                      id=""
                      className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ml-8"
                    />{' '}
                    $5.000
                  </p>
                </tr>
                <tr className=" text-xl font-sans font-semibold">
                  <input
                    type="radio"
                    name="cantidad"
                    id=""
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ml-8"
                  />
                  {''} $6.000
                </tr>
                <tr className=" text-xl  font-sans font-semibold">
                  <input
                    type="radio"
                    name="cantidad"
                    id=""
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ml-8"
                  />
                  {''} Otro monto
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-between px-8 py-8">
          <button className="transition ease-in-out delay-150 bg-orange-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-600 duration-300 p-3 rounded-lg text-white font-bold text-xl w-1/6">
            Cancelar
          </button>
          <button className="transition ease-in-out delay-150 bg-orange-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-600 duration-300 p-3 rounded-lg text-white font-bold text-xl w-1/6">
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Extraccion;
