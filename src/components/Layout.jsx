import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div className=" w-auto h-auto ">
      <h1 className="text-center uppercase text-2xl bg-orange-600 p-4 text-white font-bold">
        Cajero Automático
      </h1>
      <Outlet />
    </div>
  );
};

export default Layout;
