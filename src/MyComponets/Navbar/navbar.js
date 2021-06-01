import "./navbar.css";
import React {useState} from "react";
import { Link } from "react-router-dom";

function Navbar() {
const [imgurl,setImgUrl] = useState ("https://i.ibb.co/Q85x84d/Pics-Art-05-31-10-23-10.png")
https://i.ibb.co/F6kqwHH/Pics-Art-05-31-01-28-58.jpg  
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
