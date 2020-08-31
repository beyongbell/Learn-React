import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from './views/Home'
import About from './views/About'

// import CounterExample from './Components/CounterExample'


function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="p-3">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
        </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
