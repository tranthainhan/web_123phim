import React from "react";
import Carousel from "../../Components/Carousel";
import FimlList from "../../Containers/FimlList";
import NewsList from "../../Containers/NewsList";
import Session from "../../Containers/Session";
import AppDownload from "../../Components/AppDownload";

const HomeLayout = props => {
  return (
    <>
      <Carousel />
      <FimlList />
      <Session />
      <NewsList />
      <AppDownload />
    </>
  );
};

export default HomeLayout;
