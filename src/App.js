import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Button } from 'react-floating-action-button';
import Navbar from './Navbar/navbar';
import Home from './Home/home';
import Timeline from './Timeline/timeline';

let themes = 0;

function theme_change() {
  // the function to changes the theme in which the root variables are been changes and sone syles of some objects also.
  if (themes === 0) {
    document.body.style.backgroundColor = "rgb(14,14,14)";
    document.documentElement.style.setProperty("--text-color", "#000");
    document.documentElement.style.setProperty("--text-color2", "#fff");
    themes = 1;
  } else {
    document.body.style.backgroundColor = "white";
    document.documentElement.style.setProperty("--text-color", "#fff");
    document.documentElement.style.setProperty("--text-color2", "#000");
    themes = 0;
  }
}
function App() {
  return (
    <>
      <div>
        <Container>
          <Button
            tooltip="Theme Change"
            rotate={true}
            onClick={theme_change}
          />
        </Container>
      </div>
      <Router>
        <Navbar />
        <Switch>
          {/* <Route exact path="/about">
            <About /> 
          </Route>  */}
          <Route exact path="/timeline">
            <Timeline />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
