import "./Experience.css";
import verify from "../assets/verify.png";

const Experience = (props) => {
  function downward() {
    location.href = "./#project";
  }
  return (
    <div id="experience">
      <p>Explore My</p>
      <h1>Experience</h1>
      <div className="exp-section">
        <div className="lang col">
          <h2>Programming Languages</h2>
          <div className="col-1">
            <div className="verify">
              <img src={verify} alt="Verify" />
              <div className="combine">
                <h3>Javascript</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className="verify">
              <img src={verify} alt="Verify" />
              <div className="combine">
                <h3>C++</h3>
                <p>Intermediate</p>
              </div>
            </div>

            <div className="verify">
              <img src={verify} alt="Verify" />
              <div className="combine">
                <h3>PHP</h3>
                <p>Basic</p>
              </div>
            </div>

            <div className="verify">
              <img src={verify} alt="Verify" />
              <div className="combine">
                <h3>SQL</h3>
                <p>Basic</p>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
        <div className="frontend col">
          <h2>Frontend Development</h2>
          <div className="col-1">
            <div className="verify">
              <img src={verify} alt="Verify" />
              <div className="combine">
                <h3>Javascript</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className="verify">
              <img src={verify} alt="Verify" />
              <div className="combine">
                <h3>HTML</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className="verify">
              <img src={verify} alt="Verify" />
              <div className="combine">
                <h3>CSS</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className="verify">
              <img src={verify} alt="Verify" />
              <div className="combine">
                <h3>Typescript</h3>
                <p>Intermediate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="frontend col">
          <h2>Frontend Frameworks</h2>
          <div className="col-1">
            <div className="verify">
              <img src={verify} alt="Verify" />
              <div className="combine">
                <h3>React.js</h3>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="verify">
              <img src={verify} alt="Verify" />
              <div className="combine">
                <h3>Next.js</h3>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="verify">
              <img src={verify} alt="Verify" />
              <div className="combine">
                <h3>Bootstrap</h3>
                <p>Intermediate</p>
              </div>
            </div>

            <div className="verify">
              <img src={verify} alt="Verify" />
              <div className="combine">
                <h3>Tailwind</h3>
                <p>Experienced</p>
              </div>
            </div>
          </div>
        </div>
        <div className="version col">
          <h2>Version Control & Hosting</h2>
          <div className="col-1">
            <div className="verify">
              <img src={verify} alt="Verify" />
              <div className="combine">
                <h3>Git</h3>
                <p>Intermediate</p>
              </div>
            </div>

            <div className="verify">
              <img src={verify} alt="Verify" />
              <div className="combine">
                <h3>GitHub</h3>
                <p>Intermediate</p>
              </div>
            </div>

            <div className="verify">
              <img src={verify} alt="Verify" />
              <div className="combine">
                <h3>Vercel</h3>
                <p>Intermediate</p>
              </div>
            </div>

            <div className="verify">
              <img src={verify} alt="Verify" />
              <div className="combine">
                <h3>Netlify</h3>
                <p>Intermediate</p>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
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

export default Experience;
