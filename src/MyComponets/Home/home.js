import React from "react";
import "./home.css";
import shapes from "../../../public/shapes.svg";

function Home() {
  return (
    <>
      <div className="container">
        <img src={shapes} alt="" className="shapes" />
        <div className="info">
          <h4>Hello!</h4>
          <h1>Aniruddha Gawali</h1>
          <h3>Coder | Student</h3>
        </div>
      </div>
    </>
  );
}
export default Home;
