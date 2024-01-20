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
import mydata from "./resumeData.json";
function App() {
  const [main, setMain] = useState(mydata?.main);
  const [resume, setResume] = useState(mydata?.resume);
  const [portfolio, setPortfolio] = useState(mydata?.portfolio);

  console.log("mydata");

  // useEffect(() => {
  //   axios.get(".").then(({ data }) => {
  //     setMain(data?.main);
  //     setPortfolio(data?.portfolio);
  //     setResume(data?.resume);
  //   });
  // }, []);

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
