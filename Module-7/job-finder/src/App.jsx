import { Outlet } from "react-router-dom"
import Sidebar from './components/layout/Sidebar'
import Navbar from "./components/navbar/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <Sidebar/>
      <Outlet />
    </>
  )
}

export default App
