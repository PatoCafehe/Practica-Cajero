const Modal = () => {
  return (
    <div className="container m-auto mt-10 w-1/2  border-2 border-solid  border-slate-500">
      <div className=" h-96">
        <p className="font-sans font-semibold text-xl text-center mt-16">
          Su saldo es insuficiente. Puede consultar su saldo, <br /> probar con
          otro monto o cancelar la operacion
        </p>
        <div className="h-56 grid grid-cols-3 content-end">
          <div className="m-auto">
            <button className="transition ease-in-out delay-150 bg-orange-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-600 duration-300 p-3 rounded-lg text-white font-bold text-xl w-44 ">
              Cancelar
            </button>
          </div>
          <div className="m-auto">
            <button className="transition ease-in-out delay-150 bg-orange-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-600 duration-300 p-3 rounded-lg text-white font-bold text-xl w-44 ">
              Consultar Saldo
            </button>
          </div>
          <div className="m-auto">
            <button className="transition ease-in-out delay-150 bg-orange-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-600 duration-300 p-3 rounded-lg text-white font-bold text-xl w-44">
              Otro monto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
