const SaldoDisponible = () => {
  return (
    <div className="container m-auto mt-10 w-1/2  border-2 border-solid  border-slate-500">
      <div className=" h-full mb-10">
        <p className="font-sans font-semibold text-3xl text-center mt-16">
          Su saldo es: <br />
          <div className="mt-10 text-4xl">$ 1.500,00</div>
          {/* En el div de arriba poner un input que se llene cuando consulta a la base de datos */}
        </p>
        <h3 className="text-center mt-10 text-xl">
          ¿Desea realizar otra operación?
        </h3>
        <div className="h-44 grid grid-cols-2 content-end">
          <div className="m-auto">
            <button className="transition ease-in-out delay-150 bg-orange-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-600 duration-300 p-3 rounded-lg text-white font-bold text-xl w-44 ">
              SI
            </button>
          </div>
          <div className="m-auto">
            <button className="transition ease-in-out delay-150 bg-orange-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-600 duration-300 p-3 rounded-lg text-white font-bold text-xl w-44 ">
              NO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaldoDisponible;
