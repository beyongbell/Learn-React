import React from 'react';
import './App.css';
import HelloWorld   from './Components/HelloWorld'
import CounterExample from './Components/CounterExample'

function App() {
  return (
    <div>
      <HelloWorld name="Tinnakorn"/>
      <CounterExample />
      </div>
  );
}

export default App;
