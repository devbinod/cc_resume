import React, { Component, useEffect, useState } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import axios from "axios";
function App() {
  const [main, setMain] = useState();
  const [resume, setResume] = useState();
  const [portfolio, setPortfolio] = useState();

  useEffect(() => {
    axios
      .get(
        "https://2ddkl2jhmmqgovpopb7g32cbrm0jaysi.lambda-url.us-east-1.on.aws"
      )
      .then(({ data }) => {
        setMain(data?.main);
        setPortfolio(data?.portfolio);
        setResume(data?.resume);
      });
  }, []);

  console.log("====resume", resume);
  return (
    <div className="App">
      <Header data={main} />
      <About data={main} />
      <Resume data={resume} />
      <Portfolio data={portfolio} />
      <Contact data={main} />
      <Footer data={main} />
    </div>
  );
}

export default App;
