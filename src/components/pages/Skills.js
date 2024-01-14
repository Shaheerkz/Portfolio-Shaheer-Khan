import React from "react";
import Header from "../../components/Header";
import Particle from "../../Particle";
// import HTML from "../HTML.png";
// import Css from "../Css.png";
// import Js from "../Js.png";
// import Jquery from "../jquery.png";
// import ReactImg from "../react.png";
// import Bootstrap from "../bootstrap.png";
// import tailwind from "../tailwind.png";
// import Github from "../github.png";
import Card from "./Card.js";

function Skills() {
  const skillsData = [
    {
      id: 1,
      heading: 'HTML',
    },
    {
      id: 2,
      heading: 'CSS',
    },
    {
      id: 3,
      heading: 'BOOTSTRAP',
    },
    {
      id: 4,
      heading: 'TAILWIND',
    },
    {
      id: 5,
      heading: 'JAVASCRIPT',
    },
    {
      id: 6,
      heading: 'JQUERY',
    },
    {
      id: 7,
      heading: 'REACT',
    },
    {
      id: 8,
      heading: 'GITHUB',
    }
  ]
  return (
    <>
      <Particle />
      <div className="container">
        <Header />
        <div className="row skills">
            {skillsData.map((card) => (<Card heading={card.heading} key={card.id} />))}
        </div>
      </div>
    </>
  );
}

export default Skills;
