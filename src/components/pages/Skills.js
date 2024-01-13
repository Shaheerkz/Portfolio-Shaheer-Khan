import React from "react";
import Header from "../../components/Header";
import Particle from "../../Particle";
import HTML from "../HTML.png";
function Skills() {
  return (
    <>
      <Particle />
      <div className="container">
        <Header />
        <div className="row skills">
          <div className="col-4">
            <div className="skills-Card">
              <div className="p-3">
                <img src={HTML} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
