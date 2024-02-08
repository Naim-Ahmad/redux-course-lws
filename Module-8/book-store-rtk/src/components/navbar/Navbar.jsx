import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import SearchBook from './SearchBook'

export default function Navbar() {

  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <Link to="/">
          <img src={logo} width="150px" className="object-contain" />
        </Link>

        <ul className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className="cursor-pointer" id="lws-bookStore">
            <li>Book Store</li>
          </NavLink>
          <NavLink to="/addBook" className="cursor-pointer" id="lws-addBook">
            <li>Add Book</li>
          </NavLink>
        </ul>

        <SearchBook />
      </div>
    </nav>
  )
}