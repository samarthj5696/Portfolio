import * as React from "react";
import navBar from "./navBar.css";

const pages = ["About", "Projects", "Work Experience", "POR"];
function NavBar() {
  return (
    <div
      style={{
        background: "black",
        boxShadow: "0 0 30px 20px black",
        display: "flex",
        height: "60px",
        alignItems: "center",
        paddingLeft: "30px",
        margin: "10px",
      }}
    >
      <div style={{ display: "inline" }}>
        <img src="19.png" className="icon"></img>
        <div style={{ display: "inline" }}>
          {pages.map((page) => (
            <a href={"#" + page} className="text">
              <div key={page} className="navObject">
                {page}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
export default NavBar;
