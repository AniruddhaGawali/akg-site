import "./navbar.css";
import { BrowserRouter as Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <span className="nav_item">
          <Link to="/"> Home</Link>
        </span>
        <span className="nav_item">
          <Link to="/"> Timeline</Link>
        </span>
        <span>
          <Link to="/">
            <img
              className="logo"
              src="https://i.ibb.co/F6kqwHH/Pics-Art-05-31-01-28-58.jpg"
              alt="Pics-Art-05-31-01-28-58"
            />
          </Link>
        </span>
        <span className="nav_item">
          <Link to="/"> Projects </Link>
        </span>
        <span className="nav_item">
          <Link to="/"> Learn </Link>
        </span>
      </nav>
    </>
  );
}

export default Navbar;
