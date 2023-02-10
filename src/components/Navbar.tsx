import Logout from '../components/Logout';

function Navbar() {
  return (
    <nav className='flex bg-gray-100 rounded items-center justify-between p-1'>
      <div className="sm:ml-4 pl-1 ">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
      </div>
      <div>
      <Logout/>
      </div>
    </nav>
  )
}

export default Navbar