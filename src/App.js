import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import "./App.css";

//IMPORT COMPONENT
// import Footer from "./Components/Footer";
import AppDownload from "./Components/AppDownload";
import Carousel from "./Components/Carousel";
import FimlList from "./Containers/FimlList";
import NewsList from "./Containers/NewsList";
import FilmDetail from "./Layout/FilmDetail/FilmDetail";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Carousel}/>
        <Route path="/" exact component={FimlList}/>
        <Route path="/" exact component={NewsList}/>
        <Route path="/" exact component={AppDownload}/>
          {/* <Carousel />
          <FimlList />
          <NewsList />
          <AppDownload /> */}
        {/* </Route> */}
        <Route path="/phim/:biDanh" exact component={FilmDetail} />
      </Switch>
    </div>
  );
}

export default App;
