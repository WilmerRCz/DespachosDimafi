import Logout from "./ButtonLogout";
import { useAuthStore } from "../store/auth";
import { Drawer } from "antd";
import { FaTruck, FaCar, FaUser } from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

import { Link } from "react-router-dom";

function Navbar() {
  const open = useAuthStore((state) => state.openToggleSidebar);
  const setOpen = useAuthStore((state) => state.setOpenToggleSidebar);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <nav className="w-full flex bg-gray-100 rounded items-center justify-between p-1">
      <div className="sm:ml-4 pl-1 cursor-pointer" onClick={showDrawer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
      <div>
        <Logout />
      </div>
      <Drawer
        title={
          <div className=" gap-x-4 items-center flex">
            <img
              src="/src/assets/LogoDimafi.svg"
              className={`cursor-pointer`}
            />
            <h1 className={`text-black text-xl font-bold cursor-pointer`}>
              DIMAFI
            </h1>
          </div>
        }
        placement={"left"}
        width={250}
        onClose={onClose}
        open={open}
      >
        <ul className="">
          <Link to="/home" onClick={onClose}>
            <li
              className={`text-gray-900 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-400 rounded-md`}
            >
              <FaTruck size={28} />
              <span className={`text-slate-700 font-semibold`}>Despachos</span>
            </li>
          </Link>

          <Link to="/vehiculos" onClick={onClose}>
            <li
              className={`text-gray-900 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-400 rounded-md`}
            >
              <FaCar size={28} />
              <span className={`text-slate-700 font-semibold`}>Vehiculos</span>
            </li>
          </Link>

          <Link to="/sucursales" onClick={onClose}>
            <li
              className={`text-gray-900 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-400 rounded-md`}
            >
              <HiOfficeBuilding size={28} />
              <span className={`text-slate-700 font-semibold`}>Sucursales</span>
            </li>
          </Link>

          <Link to="/usuarios" onClick={onClose}>
            <li
              className={`text-gray-900 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-400 rounded-md`}
            >
              <FaUser size={28} />
              <span className={`text-slate-700 font-semibold`}>Usuarios</span>
            </li>
          </Link>

          <Link to="/dashboard" onClick={onClose}>
            <li
              className={`text-gray-900 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-400 rounded-md`}
            >
              <MdDashboard size={28} />
              <span className={`text-slate-700 font-semibold`}>Dashboard</span>
            </li>
          </Link>
        </ul>
      </Drawer>
    </nav>
  );
}

export default Navbar;
