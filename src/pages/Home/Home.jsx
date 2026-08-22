import React from "react";
import "./Home.css";
import Welcome from "../../components/Welcome/Welcome";
import Contribute from "../../components/Contribute/Contribute";

const Home = () => {
  return (
    <div className="home">
      <Welcome />
      <Contribute/>
    </div>
  );
};

export default Home;
