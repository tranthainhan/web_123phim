import React from 'react';

import './App.css';

//IMPORT COMPONENT
// import Footer from "./Components/Footer";
import AppDownload from "./Components/AppDownload";
import Carousel from './Components/Carousel';
import FimlList from './Containers/FimlList';
import NewsList from './Containers/NewsList';
import Session from './Containers/Session';

function App() {
  return (
    <div className="App">
      <Carousel />
      <FimlList />
      <Session />
      <NewsList />
      <AppDownload />
    </div>
  );
}

export default App;
