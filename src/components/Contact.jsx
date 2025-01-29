import "./Contact.css";
import linkedin from "../assets/linkedin.png";
import mail from "../assets/mail.png";

const Contact = () => {
  return (
    <div id="contact">
      <p>Get in Touch</p>
      <h1>Contact Me</h1>
      <div className="contact-container">
        <div className="contact-section">
          <div className="mail-section">
            <img src={mail} alt="mail" />
            <a href="mailto:Nishanshrestha1456@gmail.com" target="_blank">
              Nishanshrestha1456@gmail.com
            </a>
          </div>
          <div className="git-section">
            <img src={linkedin} alt="linkedin" />
            <a
              href="https://www.linkedin.com/in/nishan-shrestha-445048287"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Copyright &#169; 2024 NishanShrestha. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Contact;
