import { Drawer } from "antd";
import { FaTruck, FaCar, FaUser } from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import { useUserStore } from "../../store/user";

function DrawerNavbar() {
  const open = useUserStore((state) => state.openToggleSidebar);
  const setOpen = useUserStore((state) => state.setOpenToggleSidebar);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Drawer
        title={
          <div className=" gap-x-4 items-center flex">
            <img
              src="/src/assets/LOGO DIMAFI.PNG"
              className="w-40 cursor-pointer m-2"
            />
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

          {/* <Link to="/dashboard" onClick={onClose}>
            <li
              className={`text-gray-900 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-400 rounded-md`}
            >
              <MdDashboard size={28} />
              <span className={`text-slate-700 font-semibold`}>Dashboard</span>
            </li>
          </Link> */}
        </ul>
      </Drawer>
    </div>
  );
}

export default DrawerNavbar;
