import React from "react";
import Carousel from "../../Components/Carousel";
import FimlList from "../../Containers/FimlList";
import NewsList from "../../Containers/NewsList";

const HomeLayout = props => {
  return (
    <>
      <Carousel />
      <FimlList />
      <NewsList />
    </>
  );
};

export default HomeLayout;
