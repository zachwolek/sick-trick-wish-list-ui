import './App.css';
import React, { useState, useEffect } from 'react';
import { getTricks } from '../../api-calls';
import { Tricks } from '../Tricks/Tricks';
import { Form } from '../Form/Form';



function App() {
  const [tricks, setTricks] = useState([])

  useEffect (() => {
    getTricks()
      .then(response => response.json())
      .then(data => setTricks(data))
  }, [])

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Form />
      <Tricks tricks={tricks}/>
    </div>
  );
}

export default App; 
