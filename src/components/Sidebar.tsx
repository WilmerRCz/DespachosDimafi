import { RiArrowDropLeftLine } from "react-icons/ri";
import { FaTruck, FaCar, FaUser } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import TitlePage from "./TitlePage";
import Logout from "./Logout";

function Sidebar() {
  const open = useAuthStore((state) => state.openToggleSidebar);
  const setOpen = useAuthStore((state) => state.setOpenToggleSidebar);

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-300 h-screen p-5 pt-8 bg-red-400 relative`}
      >
        <RiArrowDropLeftLine
          size={28}
          className={`absolute cursor-pointer -right-3 rounded-full
         top-9 w-7 border-2 bg-red-400 ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="/src/assets/LogoDimafi.svg"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-300 cursor-pointer ${
              !open && "scale-0"
            }`}
          >
            DIMAFI
          </h1>
        </div>
        <ul className="pt-6">
          <Link to="/home">
            <li
              className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-900 rounded-md`}
            >
              <FaTruck size={28} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Despachos
              </span>
            </li>
          </Link>

          <Link to="/vehiculos">
            <li
              className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-900 rounded-md`}
            >
              <FaCar size={28} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Vehiculos
              </span>
            </li>
          </Link>

          <Link to="/sucursales">
            <li
              className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-900 rounded-md`}
            >
              <HiOutlineOfficeBuilding size={28} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Sucursales
              </span>
            </li>
          </Link>

          <Link to="/usuarios">
            <li
              className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-900 rounded-md`}
            >
              <FaUser size={28} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Usuarios
              </span>
            </li>
          </Link>

          <Link to="/dashboard">
            <li
              className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-900 rounded-md`}
            >
              <MdDashboard size={28} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Dashboard
              </span>
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <TitlePage title="Home" />
        <Logout />
      </div>
    </div>
  );
}

export default Sidebar;
