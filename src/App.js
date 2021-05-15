import React from 'react';
import './App.css'
import Header from './components/Header'
import Caja from './components/Caja'

function App() {
  return (
    <div className="Container">
      <Header color = "CC4AE3" title = "Hello World"/>
      <Caja color = "red" />
      <Caja />
      <Caja color = "green" text = "test"/>

    </div>
  );
}

export default App;
