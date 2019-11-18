import React from 'react';

import './App.css';

//IMPORT COMPONENT
// import Footer from "./Components/Footer";
import AppDownload from "./Components/AppDownload";
import Carousel from './Components/Carousel';
import FimlList from './Containers/FimlList';

function App() {
  return (
    <div className="App">
      <Carousel />
      <FimlList />
      <AppDownload />
    </div>
  );
}

export default App;
