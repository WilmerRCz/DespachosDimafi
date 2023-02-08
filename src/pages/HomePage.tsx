import { RiArrowDropLeftLine } from "react-icons/ri";
import { FaTruck, FaCar, FaUser } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import TitlePage from "../components/TitlePage";
import Logout from "../components/Logout";



function HomePage(){

  const open = useAuthStore((state) => state.openToggleSidebar);
  const setOpen = useAuthStore((state) => state.setOpenToggleSidebar);

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-64" : "w-20"
        } duration-300 h-screen p-5 pt-8 bg-gray-500 relative`}
      >
        <RiArrowDropLeftLine
          size={28}
          className={`absolute cursor-pointer -right-3 rounded-full
         top-9 w-7 border-2 bg-gray-500 ${!open && "rotate-180"}`}
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
            className={`text-white origin-left  text-xl font-bold duration-300 cursor-pointer ${
              !open && "scale-0"
            }`}
          >
            DIMAFI
          </h1>
        </div>
        <ul className="pt-6">
          <Link to="/home">
            <li
              className={`text-gray-900 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-400 rounded-md`}
            >
              <FaTruck size={28} />
              <span className={`${!open && "hidden"} text-white origin-left duration-200`}>
                Despachos
              </span>
            </li>
          </Link>

          <Link to="/vehiculos">
            <li
              className={`text-gray-900 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-400 rounded-md`}
            >
              <FaCar size={28} />
              <span className={`${!open && "hidden"} text-white origin-left duration-200`}>
                Vehiculos
              </span>
            </li>
          </Link>

          <Link to="/sucursales">
            <li
              className={`text-gray-900 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-400 rounded-md`}
            >
              <HiOutlineOfficeBuilding size={28} />
              <span className={`${!open && "hidden"} text-white origin-left duration-200`}>
                Sucursales
              </span>
            </li>
          </Link>

          <Link to="/usuarios">
            <li
              className={`text-gray-900 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-400 rounded-md`}
            >
              <FaUser size={28} />
              <span className={`${!open && "hidden"} text-white origin-left duration-200`}>
                Usuarios
              </span>
            </li>
          </Link>

          <Link to="/dashboard">
            <li
              className={`text-gray-900 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-400 rounded-md`}
            >
              <MdDashboard size={28} />
              <span className={`${!open && "hidden"} text-white origin-left duration-200`}>
                Dashboard
              </span>
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <TitlePage title="Despachos" />
        <Logout />
      </div>
    </div>
  );
}

export default HomePage;
