import React from "react";
import "./Home.css";
import Hero from "./../../components/Hero/Hero";
import PopularCards from "./../../components/MostPopular/PopularCards";
import GamingLibrary from "./../../components/GamingLibrary/GamingLibrary";

const Home = () => {
  return (
    <>
      <Hero />
      <PopularCards />
      <GamingLibrary />
    </>
  );
};

export default Home;
