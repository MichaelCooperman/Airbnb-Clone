import React, { useState } from "react";
import Header from "../src/react/Header/Header.js";
import Filters from "../src/react/Filters/Filters.js";
import Cards from "../src/react/Cards/Cards.js";
import requests from "./react/Cards/requests.js";
import Footer from "./react/Footer/Footer.js";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <React.Fragment>
      <Header setSelectedOption={setSelectedOption} />
      <Filters setSelectedOption={setSelectedOption} />
      <Cards selectedOption={selectedOption} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
