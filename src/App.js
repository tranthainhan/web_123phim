import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

//IMPORT COMPONENT
// import Footer from "./Components/Footer";
import FilmDetail from "./Layout/FilmDetail/FilmDetail";
import HomeLayout from "./Layout/Home";
import Header from "./Containers/Header";
import Dialog from "./Containers/Dialog";
import Footer from "./Components/Footer";
// import AppDownload from "./Components/AppDownload";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Header />
          <main className="main">
            <Switch>
              <Route path="/" exact component={HomeLayout} />
              <Route path="/phim/:bidanh" component={FilmDetail} />
            </Switch>
          </main>
          <Dialog />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
