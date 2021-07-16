import React, { useState } from "react";
import Header from "../components/Header";
import Movies from "../components/Movies";

const Home = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <Header value={value} setValue={setValue} />
      <Movies value={value} />
    </div>
  );
};

export default Home;
