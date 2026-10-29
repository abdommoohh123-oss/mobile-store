import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav">
      <Link to="/home">Home</Link>
      <Link to="/mobiles">Mobiles</Link>
    </nav>
  );
};

export default Navigation;