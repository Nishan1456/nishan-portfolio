import "./About.css";
import aboutImage from "../assets/Nishan1.jpg";
import certificate from "../assets/certificate.png";
import education from "../assets/education.png";

const About = (props) => {
  function downward() {
    location.href = "./#experience";
  }
  return (
    <div id="about">
      <p>Get To Know More</p>
      <h1>About Me</h1>
      <div className="about-container">
        <div className="about-profile">
          <img src={aboutImage} alt="about Image" />
        </div>
        <div className="about-description">
          <div className="education-section">
            <div className="experience">
              <img src={certificate} alt="certification" />
              <h3>Experience</h3>
              <p>6+ months</p>
              <p>Frontend Development</p>
            </div>
            <div className="education">
              <img src={education} alt="qualification" />
              <h3>Education</h3>
              <p>HSEB, Tribhuvan University</p>
              <p>BE Computer, Purbanchal Univeristy</p>
            </div>
          </div>
          <div className="text-section">
            I am a BE Computer graduate and a passionate frontend developer with
            expertise in creating responsive, user-friendly web applications. I
            have strong skills in HTML5, CSS6, JavaScript(ES6+), and modern
            frameworks like React and Vue.js along with knowledge of version
            control, hosting data structures, algorithms, and database
            management. I enjoy crafting intuitive UI/UX designs and optimizing
            web performance. Always eager to learn and adapt, I thrive on
            building seamless digital experiences and staying updated with the
            latest frontend technologies. I am a quick learner, adaptable, and
            always looking for opportunities to grow and contribute to
            innovative projects.
          </div>
        </div>
      </div>
      <img
        src={props.arr}
        alt="Arrow icon"
        className="arrow"
        onClick={downward}
      />
    </div>
  );
};

export default About;
