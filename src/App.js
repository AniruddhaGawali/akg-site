import './App.css';
import React , {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Button } from 'react-floating-action-button';
import Navbar from './Navbar/navbar';
import Home from './Home/home';
import Timeline from './Timeline/timeline';


function App() {
const [theme, setTheme] = useState(false);
const [img, setImg] = useState('https://i.ibb.co/F6kqwHH/Pics-Art-05-31-01-28-58.jpg');

  function theme_change() {
    // the function to changes the theme in which the root variables are been changes and sone syles of some objects also.
    if (theme === false) {
      document.body.style.backgroundColor = "rgb(14,14,14)";
      document.documentElement.style.setProperty("--text-color", "#000");
      document.documentElement.style.setProperty("--text-color2", "#fff");
      setImg('https://i.ibb.co/DMrJ8nb/Pics-Art-05-31-01-29-26.jpg')
      setTheme(true)
    } else {
      document.body.style.backgroundColor = "white";
      document.documentElement.style.setProperty("--text-color", "#fff");
      document.documentElement.style.setProperty("--text-color2", "#000");
      setImg('https://i.ibb.co/F6kqwHH/Pics-Art-05-31-01-28-58.jpg')
      setTheme(false)
    }
  }
 
  
  return (
    <>
      <div>
        <Container>
          <Button
            tooltip="Theme Change"
            icon={"material-icons"}
            onClick={theme_change}
          />
        </Container>
      </div>
      <Router>
        <Navbar img_url={img} />
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
