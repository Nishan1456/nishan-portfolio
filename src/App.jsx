import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Project from "./components/project";
import arr from "./assets/downarr.png";
import Contact from "./components/Contact";
import { useState, useEffect } from "react";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  const toggleMode = (cls) => {
    if (cls === "blue") {
      document.querySelector(".contact-section").style.backgroundColor = "blue";
    } else if (cls === "yellow") {
      document.querySelector(".contact-section").style.background = "yellow";
    } else if (cls === "green") {
      document.querySelector(".contact-section").style.background = "green";
    } else if (cls === "red") {
      document.querySelector(".contact-section").style.background = "red";
    }
  };
  return (
    <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Home arr={arr} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <About arr={arr} />
      <Experience arr={arr} />
      <Project arr={arr} />
      <Contact toggleMode={toggleMode} />
    </div>
  );
};

export default App;
