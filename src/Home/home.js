import React from 'react';
import './home.css';
import Shape from './shape.svg';
import Circle from './circle.svg';
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="info">
            <div className="greet">
              <Typewriter
                onInit={typewriter => {
                  typewriter
                    .pauseFor(3000)
                    .typeString('Hello!')
                    .start();
                }}
              />
            </div>
            <h1>Aniruddha Gawali</h1>
            <h3>Coder | Student</h3>
          </div>
          <div className="bimoji">
            <img
              src="https://i.ibb.co/QkWYsXM/Pics-Art-05-30-05-41-22.png"
              alt="bimoji"
              className="bimoji"
            />
          </div>
        </div>
      </div>
      <img src={Shape} alt="" className="shape" />
      <img src={Circle} alt="" className="circle_shape" />
    </>
  );
}

export default Home;
