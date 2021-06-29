import { Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { NavProduct, Logo } from "../style";

const Navbare = () => {
  return (
    <div>
      {/* <Navbar to="/" className="nav">
        <div className="mr-auto">
          <Navbar.Brand>
            <NavLink to="/books" className="nav-item">
              Books
            </NavLink>
          </Navbar.Brand>
          <Navbar.Brand>
            <NavLink to="/members" className="nav-item">
              Members
            </NavLink>
          </Navbar.Brand>
        </div>
      </Navbar> */}
      <nav className="navbar navbar-expand-sm bg-secondary navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavProduct to="/books" className="nav-link">
              Books
            </NavProduct>
          </li>
          <li className="nav-item">
            <NavProduct to="/members" className="nav-link">
              Members
            </NavProduct>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbare;
