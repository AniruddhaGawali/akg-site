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
          {/* <img
            src="https://i.ibb.co/QkWYsXM/Pics-Art-05-30-05-41-22.png"
            alt=""
          /> */}
          <img
            src="https://i.ibb.co/VMCyHW6/Pics-Art-06-02-11-25-54.png"
            alt=""
            id="body"
          />
          <div id="hand">
            <img
              src="https://i.ibb.co/tMdRkxB/Pics-Art-06-02-11-21-22.png"
              alt=""
            />
            <div id="fingur">
              <img
                src="https://i.ibb.co/MZcJMbT/Pics-Art-06-02-11-22-43.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
