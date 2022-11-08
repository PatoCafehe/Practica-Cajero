import Teclado from '../components/Teclado';
import CancelarBtn from '../components/CancelarBtn';
const OtroMonto = () => {
  return (
    <div className="container m-auto mt-12">
      <div className="border-2 border-solid  border-slate-400 w-5/6 m-auto">
        <h1 className="text-2xl text-center mt-8 font-semibold">Otro Monto</h1>
        <div className="flex justify-between">
          <div className="grid grid-rows-2">
            <div className="px-56 py-20">
              <label htmlFor="">
                <input
                  type="number"
                  placeholder="$ 0"
                  className="p-2 text-center text-3xl text-black-800"
                />
              </label>
            </div>
            <div className="mt-20">
              <CancelarBtn/>
            </div>
          </div>
          <div className="mt-8">
            <Teclado />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtroMonto;
