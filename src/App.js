import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Button, Link } from 'react-floating-action-button';
import Navbar from './Navbar/navbar';
import Home from './Home/home';
import Timeline from './Timeline/timeline';

function App() {
  return (
    <>
      <Router>
        <Container>
          <Link href="#" tooltip="Create note link" />
          <Link href="#" tooltip="Add user link" />

          <Button
            tooltip="The big plus button!"
            style={{background : transparent}}
            rotate={true}
            onClick={() => alert('FAB Rocks!')}
          />
        </Container>
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
