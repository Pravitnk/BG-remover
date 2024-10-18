import React from "react";
import Header from "../components/Header";
import Steps from "../components/Steps";
import BgSlidder from "../components/BgSlidder";
import Testimonials from "../components/Testimonials";
import Upload from "../components/Upload";

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <BgSlidder />
      <Testimonials />
      <Upload />
    </div>
  );
};

export default Home;
