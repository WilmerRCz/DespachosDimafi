import Navbar from '../components/Navbar/Navbar'
import TitlePage from "../components/common/TitlePage";

function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-slate-700 text-2xl sm:text-6xl font-semibold "><span className='text-4xl sm:text-7xl'>404</span> - Página no encontrada</h1>
          <p className="text-slate-700 sm:text-xl mt-4">Lo sentimos, la página que estás buscando no existe.</p>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage;
