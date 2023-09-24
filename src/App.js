import { useEffect } from "react";
import "./App.css";
import Block1 from "./Block1";
import Block2 from "./Block2";
import Block3 from "./Block3";
import Block4 from "./Block4";
import Block5 from "./Block5";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".visible");
    hiddenElements.forEach((el) => {
      observer.observe(el);
    });
  }, []);
  return (
    <>
      <SideBar />
      <NavBar />
      <div className="background">
        <div className="blocks">
          <Block1 />
          <Block2 />
          <Block3 />
          <Block4 />
          {/* <Block5 /> */}
        </div>
      </div>
      <div className="bottomText">To know more check my resume :)</div>
    </>
  );
}

export default App;
