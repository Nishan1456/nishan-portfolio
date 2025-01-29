import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Project from "./components/project";
import arr from "./assets/downarr.png";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Home />
      <About />
      <Experience />
      <Project arr={arr} />
      <Contact />
    </>
  );
};

export default App;
