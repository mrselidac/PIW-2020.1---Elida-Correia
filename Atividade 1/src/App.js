import React from 'react';
import './App.css';
import NavSuperior from './Components/NavSuperior/NavSuperior'
import Galeria from './Components/Galeria/Galeria';

function App() {
  return (
    <div className="App">
      <NavSuperior></NavSuperior>
      <Galeria />
    </div>
  );
}

export default App;
