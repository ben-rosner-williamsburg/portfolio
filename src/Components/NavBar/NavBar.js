import "./NavBar.css"
import {Link} from "react-router-dom"

function NavBar() {
  return (
    <nav className="main-nav">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/projects">Projects</Link>
      <Link className="nav-link" to="/contact">Contact</Link>
    </nav>
  );
};


export default NavBar;