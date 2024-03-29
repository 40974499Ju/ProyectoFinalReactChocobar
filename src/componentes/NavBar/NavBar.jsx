import { Link,NavLink } from "react-router-dom";
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
  return (
    <header>
        <Link to="/">
            <h1>Vestidos online</h1>
        </Link>

        <nav>
            <ul>
                <li>
                    <NavLink to="/categoria/2">Vestidos largos</NavLink>
                </li>

                <li className="navj">
                    <NavLink to="/categoria/3">Vestidos cortos</NavLink>
                </li>
            </ul>
        </nav>

    </header>
  )
}

export default NavBar