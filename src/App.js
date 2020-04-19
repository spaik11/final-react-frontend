import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
