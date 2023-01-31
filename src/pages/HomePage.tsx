import DespachosTable from "../components/DespachosTable"
import Logout from "../components/Logout"
import Nav from "../components/Nav"
function HomePage() {
  return (
    <div><h1>Home</h1>
    <Nav/>
    <Logout />
    <DespachosTable/>
    </div>
  )
}

export default HomePage