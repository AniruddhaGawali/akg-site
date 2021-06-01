import React from "react";
import "./home.css";
import shape from '../../../public/shapes.svg'

function Home() {
  return (
    <>
      <div className="container">
        <div className="info">
          <h4>Hello!</h4>
          <h1>Aniruddha Gawali</h1>
          <h3>Coder | Student</h3>
        </div>
        <img src={shape}/>
      </div>
    </>
  );
}
export default Home;
