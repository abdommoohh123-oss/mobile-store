import { AiFillCloseCircle } from "react-icons/ai";
import "./sidenav.css";
import { Link } from "react-router-dom";

const SideNav = (props) => {
  return (
    <nav className="sidenav">
      <div className="sidenav-header">
        <button className="close-button" aria-label="Close menu" onClick={props.closeSidebar}>
          <AiFillCloseCircle />
        </button>
      </div>
      <ul>
        <li> <Link to="/home">Home</Link></li>
        <li><Link to="/mobiles">Mobiles</Link></li>
        <li><Link to="/wishlist">Wishlist</Link></li>
        <li><Link to="/offers">Offers</Link></li>
        <li><Link to="/accessories">Accessories</Link></li>
      </ul>
    </nav>
  );
};

export default SideNav;