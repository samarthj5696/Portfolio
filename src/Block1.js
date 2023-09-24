import "./App.css";
import "./Block1.css";
const Block1 = () => {
  return (
    <div className="block-background" id="About">
      <div className="block1">
        <div>Welcome!</div>
        <div>
          I'm
          <p className="Samarth"> Samarth Joshi</p>
        </div>
        <div className="content">
          A graduate from BITS Pilani with a strong interest in programming and
          development. I thrive on solving complex problems and creating
          efficient solutions that make a positive impact. I have also gained
          valuable experience in development through my participation in several
          projects and internships, where I have had the opportunity to work on
          real-world problems and deliver tangible results.
        </div>
        <div>
          <a
            href="https://drive.google.com/file/d/1-1aOB1PsahJrmc7nQ9xS3qDxRhFhbyl1/view?usp=sharing"
            target="_blank"
          >
            <button className="buttonn">Resume</button>
          </a>
        </div>
        <div className="technologies">
          <div className="tech-text">Technologies I have worked on</div>
        </div>
        <div>
          <div className="tech-icons text-animation">
            <span>
              <img src="9.png" className="hvr img1" />
            </span>
            <span>
              <img src="10.png" className="hvr img2" />
            </span>
            <span>
              <img src="11.png" className="hvr  img3" />
            </span>
            <span>
              <img src="12.png" className="hvr img4" />
            </span>
            <span>
              <img src="13.png" className="hvr img5" />
            </span>
            <span>
              <img src="14.png" className="hvr  img6" />
            </span>
            <span>
              <img src="15.png" className="hvr  img7" />
            </span>
            <span>
              <img src="16.png" className="hvr  img8" />
            </span>
            <span>
              <img src="17.png" className="hvr  img9" />
            </span>
            <span>
              <img src="18.png" className="hvr  img10" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Block1;
