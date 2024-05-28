import './App.css';
import React, { useState, useEffect } from 'react';
import { getTricks } from '../../api-calls';



function App() {
  const [tricks, setTricks] = useState([])
  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
    </div>
  );
}

export default App; 
