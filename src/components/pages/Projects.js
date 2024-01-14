import React from "react";
import Particle from "../../Particle";
import Header from "../Header";
import ProjectCards from "./ProjectCards";
import MyImg from '../KC-autoconnect 6.png'
import Brawds from '../brawds.jpg'
import Memo from '../memorable.jpg'
function Projects() {
  const ProjectCard = [
    {
      id: 1,
      img: MyImg,
      title: "KC-AutoConnect",
      link: 'https://kcautoconnect.onlinedevelopmentserver.com',
      button: 'View Project'
    },
    {
        id: 2,
        img: Brawds,
        title: "Brawds",
        link: 'https://shaheerkz.github.io/BRAWDS',
        button: 'View Project'
      },
      {
        id: 3,
        img: Memo,
        title: "Memorable-world",
        link: 'https://onlinedevelopmentserver.com/memorable-world-new',
        button: 'View Project'
      },
  ];
  return (
    <>
      <Particle />
      <div className="container">
        <Header />
        <div className="row mt-5">
          {ProjectCard.map((card) => (
            <ProjectCards img={card.img} title={card.title} content={card.content} link={card.link} button={card.button} key={card.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
