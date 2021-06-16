import { Link } from "react-router-dom";
import { NavProduct, Logo } from "../style";
import Light from "../image/light.jfif";
import Dark from "../image/dark.png";
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand">
      <Logo to="/" className="navbar-brand">
        <img src={props.theme === "light" ? Light : Dark} />
      </Logo>
      <div className="navbar-nav ml-auto">
        {/* <Link to="/">Home</Link> */}
        <NavProduct to="/books" className="nav-item">
          Books
        </NavProduct>
        <NavProduct to="/members" className="nav-item">
          Members
        </NavProduct>
      </div>
    </nav>
  );
};
export default Navbar;
