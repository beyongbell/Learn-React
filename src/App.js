import React from 'react';
import './App.css';
import Header   from './Components/Header'
import HelloWorld   from './Components/HelloWorld'
// import CounterExample from './Components/CounterExample'

function App() {
  return (
    <div>
      <Header />
      <HelloWorld name="Tinnakorn"/>
    </div>
  );
}

export default App;
