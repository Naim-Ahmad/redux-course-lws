import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Navbar() {

  const carts = useSelector(state=> state.carts)

  return (
    <nav className="bg-[#171C2A] py-4">
    <div className="navBar">
      <Link to="/">
        <img src={logo} alt="LWS" className="max-w-[140px]" />
      </Link>

      <div className="flex gap-4">
        <Link to="/" className="navHome" id="lws-home"> Home </Link>
        <Link to="/cart" className="navCart" id="lws-cart">
          <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
          <span id="lws-totalCart">{carts.length}</span>
        </Link>
      </div>
    </div>
  </nav>
  )
}