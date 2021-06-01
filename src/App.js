import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/navbar";
import Home from "./Home/home";
import Timeline from "./Timeline/timeline";

function App() {
  return (
    <>
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
