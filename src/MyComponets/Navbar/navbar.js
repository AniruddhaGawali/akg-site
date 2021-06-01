import "./navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [imgurl, setImgUrl] = useState(
    "https://i.ibb.co/F6kqwHH/Pics-Art-05-31-01-28-58.jpg"
  );
    const menu ()
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
              src={imgurl}
              alt="AKG"
              onMouseOver={() => {
                setImgUrl(
                  "https://i.ibb.co/dWMYT20/Pics-Art-06-01-08-32-27.png"
                );
              }}
              onMouseOut={() => {
                setImgUrl(
                  "https://i.ibb.co/F6kqwHH/Pics-Art-05-31-01-28-58.jpg"
                );
              }}
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
