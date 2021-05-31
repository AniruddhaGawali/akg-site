import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./MyComponets/Navbar/navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            {/* <Home /> */}
          </Route>
          <Route exact path="/about">
            {/* <About /> */}
          </Route>
          <Route exact path="/users">
            {/* <Users /> */}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
