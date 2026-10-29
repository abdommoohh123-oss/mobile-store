import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img src={logo} alt="PhoneX Smart Store" />
    </Link>
  );
};

export default Logo;