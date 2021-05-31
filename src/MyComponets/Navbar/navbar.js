import "./navbar.css";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <span className="nav_item">
          <Link to="/" className="links">
            Home
          </Link>
        </span>
        <span className="nav_item">
          <Link to="/timeline" className="links">
            Timeline
          </Link>
        </span>
        <span className="logo_span">
          <Link to="/" className="links">
            <img
              className="logo"
              src="https://i.ibb.co/F6kqwHH/Pics-Art-05-31-01-28-58.jpg"
              alt="AKG"
            />
          </Link>
        </span>
        <span className="nav_item">
          <Link to="/" className="links">
            Projects
          </Link>
        </span>
        <span className="nav_item">
          <Link to="/" className="links">
            Learn
          </Link>
        </span>
      </nav>
    </>
  );
}

export default Navbar;
