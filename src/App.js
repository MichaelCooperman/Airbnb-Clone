import React, { useState } from "react";
import Header from "../src/react/Header/Header.js";
import Filters from "../src/react/Filters/Filters.js";
import Cards from "../src/react/Cards/Cards.js";
import requests from "./react/Cards/requests.js";
import Footer from "./react/Footer/Footer.js";
import classes from "./react/Header/header.module.css";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <React.Fragment>
      <div className={classes.add}>
        <div className={classes.res}>
          <Header setSelectedOption={setSelectedOption} />
          <Filters setSelectedOption={setSelectedOption} />
          <Cards selectedOption={selectedOption} />
          <Footer />
          <div className={classes.test}></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
