import "./Home.css";
import photo from "../assets/nishan.jpg";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import resume from "../assets/NishanShrestha_Resume.pdf";

const Home = (props) => {
  const viewResume = () => {
    window.open(resume, "_blank");
  };
  function downward() {
    location.href = "./#about";
  }
  function fetchContact() {
    location.href = "./#contact";
  }
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  return (
    <div className="container">
      <nav className="desktop-nav">
        <div className="logo">Nishan Shrestha</div>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className={`appli`}>
          <button onClick={props.toggleTheme}>
            {props.isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </nav>

      <div id="hamburger-nav">
        <div className="logo">Nishan Shrestha</div>
        <div className={`appli`}>
          <button onClick={props.toggleTheme}>
            {props.isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#project" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </div>
        </div>
      </div>
      <div className="profile">
        <div className="photo">
          <img src={photo} alt="nishan" />
        </div>
        <div className="introduce">
          <p>Hello, I'm</p>
          <h1>Nishan Shrestha</h1>
          <h3>Frontend Developer</h3>
          <div className="btns">
            <button className="download" onClick={viewResume}>
              Download CV
            </button>
            <button className="info" onClick={fetchContact}>
              Contact Info
            </button>
          </div>
          <div className="logos">
            <a
              href="https://www.linkedin.com/in/nishan-shrestha-445048287"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://github.com/Nishan1456" target="_blank">
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
      </div>
      <img
        src={props.arr}
        alt="Arrow icon"
        className="downarrow"
        onClick={downward}
      />
    </div>
  );
};

export default Home;
