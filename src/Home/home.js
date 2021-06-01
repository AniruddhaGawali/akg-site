import React from "react";
import "./home.css";
import shapes from "../../public/shapes.svg";
import shapes_c from "../../public/shape-c.svg";

function Home() {
  return (
    <>
      <div className="container">
        <img src={shapes} alt="" className="shapes" />
        <img src={shapes_c} alt="" className="shapes_c" />
        <div className="info">
          <h4>Hello!</h4>
          <h1>Aniruddha Gawali</h1>
          <h3>Coder | Student</h3>
        </div>
        <div className="bimoji">
          <img
            src="https://i.ibb.co/kKWbTS8/Pics-Art-05-31-10-11-43.png"
            alt=""
            id="body"
          />
          <img
            src="https://i.ibb.co/Kx5YvhV/Pics-Art-05-31-10-15-33.png"
            alt=""
            id="hand"
          />
          <img
            src="https://i.ibb.co/grRt3MT/Pics-Art-05-31-10-17-52.png"
            alt=""
            id="finger"
          />
        </div>
      </div>
    </>
  );
}
export default Home;
