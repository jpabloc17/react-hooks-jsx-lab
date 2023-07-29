import React from "react";
import { name, city } from "../data/data.js";

const H1 = () => {
  return (
    <h1 style={{ color: "firebrick" }}>
      {name} is a Web Developer from {city}
    </h1>
  );
};

function Home() {
  // update the JSX being returned!
  return (
    <div id="home">
      <H1 />
    </div>
  );
}

export default Home;
