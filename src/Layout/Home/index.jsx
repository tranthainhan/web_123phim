import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "../../Components/Carousel";
import FimlList from "../../Containers/FimlList";
import NewsList from "../../Containers/NewsList";
import Session from "../../Containers/Session";
import AppDownload from "../../Components/AppDownload";
import FilmsMobile from "../../Containers/FilmsMobile";

const HomeLayout = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Carousel />
      <FimlList />
      <FilmsMobile />
      <Session />
      <NewsList />
      <AppDownload />
    </>
  );
};

export default withRouter(HomeLayout);
