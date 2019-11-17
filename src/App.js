import React from 'react';

import './App.css';


//IMPORT COMPONENT
// import Footer from "./Components/Footer";
import AppDownload from "./Components/AppDownload";
import Carousel from './Components/Carousel';


function App() {
  return (
    <div className="App">
      <Carousel />
      <AppDownload />
    </div>
  );
}

export default App;
