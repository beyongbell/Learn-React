import React from "react";
import "./App.css";
import Header from "./Components/Header";
import HelloWorld from "./Components/HelloWorld";
import Footer from "./Components/Footer";
// import CounterExample from './Components/CounterExample'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <HelloWorld name="Tinnakorn" />
        <Switch>
          <Route exact path="/">
            <h1 className="font-bold text-2xl"> This is Home Page </h1>
          </Route>
          <Route path="/about">
            <h1 className="font-bold text-2xl"> About Us </h1>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
