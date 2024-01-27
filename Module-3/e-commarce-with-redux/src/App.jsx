
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'

function App() {

  // const {pathname} = window.location
  // console.log(pathname)

  return (
    <>
     <Navbar/>
     <main className="py-16">
     
        <Outlet/>
  
     </main>
    </>
  )
}

export default App
