import "./navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

function Navbar() {
  const [imgurl, setImgUrl] = useState(
    "https://i.ibb.co/F6kqwHH/Pics-Art-05-31-01-28-58.jpg"
  );
  const [id1, setid1] = useState("active");
  const [id2, setid2] = useState("");
  const [id3, setid3] = useState("");
  const [id4, setid4] = useState("");

  const [oldidno, setoldid] = useState(1);

  const [menu, setMenu] = useState(false);

  const display_set = useSpring({
    display: menu ? "none" : "block"
  });
  

  function change_nav_item(id_no) {
    if (oldidno === 1) {
      setid1("");
    } else if (oldidno === 2) {
      setid2("");
    } else if (oldidno === 3) {
      setid3("");
    } else if (oldidno === 4) {
      setid4("");
    }

    if (id_no === 1) {
      setid1("active");
    } else if (id_no === 2) {
      setid2("active");
    } else if (id_no === 3) {
      setid3("active");
    } else if (id_no === 4) {
      setid4("active");
    }

    setoldid(id_no);
  }

  return (
    <>
      <nav>
        <animated.span className="nav_item" style={display_set}>
          <Link
            to="/"
            className="links"
            id={id1}
            onClick={() => {
              change_nav_item(1);
            }}
          >
            <span class="material-icons">home</span>
            Home
          </Link>
        </animated.span>
        <animated.span className="nav_item" style={display_set}>
          <Link
            to="/timeline"
            className="links"
            id={id2}
            onClick={() => {
              change_nav_item(2);
            }}
          >
            <span class="material-icons">event</span>
            Timeline
          </Link>
        </animated.span>
        <span className="logo_span">
          {/* <Link to="/" className="links"> */}
          <img
            className="logo"
            src={imgurl}
            alt="AKG"
            onMouseOver={() => {
              setImgUrl("https://i.ibb.co/dWMYT20/Pics-Art-06-01-08-32-27.png");
            }}
            onMouseOut={() => {
              setImgUrl("https://i.ibb.co/F6kqwHH/Pics-Art-05-31-01-28-58.jpg");
            }}
            onClick={() => {
              if (window.matchMedia('(max-width:660px)').matches){setMenu(!menu)}
              }}
          />
          {/* </Link> */}
        </span>
        <animated.span className="nav_item" style={display_set}>
          <Link
            to="/"
            className="links"
            id={id3}
            onClick={() => {
              change_nav_item(3);
            }}
          ><span class="material-icons">code</span>
            Projects
          </Link>
        </animated.span>
        <animated.span className="nav_item" style={display_set}>
          <Link
            to="/"
            className="links"
            id={id4}
            onClick={() => {
              change_nav_item(4);
            }}
          ><span class="material-icons">school</span>
            Learn
          </Link>
        </animated.span>
      </nav>
    </>
  );
}

export default Navbar;
