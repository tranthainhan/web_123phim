import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Loadable from "react-loadable";

//IMPORT COMPONENT
// import FilmDetail from "./Layout/FilmDetail";
// import HomeLayout from "./Layout/Home";
import Header from "./Containers/Header";
import Dialog from "./Containers/Dialog";
import Footer from "./Components/Footer";
// import CheckoutLayout from "./Layout/CheckoutLayout";

const DynamicImport = loadCompoennt =>
  Loadable({
    loader: loadCompoennt,
    loading: () => null
  });

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path="/checkout/:maLichChieu"
          component={DynamicImport(() => import("./Layout/CheckoutLayout"))}
        />
        <Route path="/">
          <Header />
          <main className="main">
            <Switch>
              <Route
                path="/"
                exact
                component={DynamicImport(() => import("./Layout/Home"))}
              />
              <Route
                path="/phim/:bidanh"
                component={DynamicImport(() => import("./Layout/FilmDetail"))}
              />
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
