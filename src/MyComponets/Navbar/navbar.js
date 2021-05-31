import "./navbar.css";
import { BrowserRouter as Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <span className="nav_item"> Home</span>
        <span className="nav_item"> Timeline</span>
        <span>
          <img
            className="logo"
            src="https://i.ibb.co/F6kqwHH/Pics-Art-05-31-01-28-58.jpg"
            alt="Pics-Art-05-31-01-28-58"
          />
        </span>
        <span className="nav_item"> Projects</span>
        <span className="nav_item"> Learn</span>
      </nav>
    </>
  );
}

export default Navbar;
