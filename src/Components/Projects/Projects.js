import React from "react";
import blogApp from "../../img/blog-app.png";
import bookShop from "../../img/book-shop.png";
import doctor from "../../img/life-care.png";
import shop from "../../img/online-shop.png";
import quizApp from "../../img/quiz-app.png";
import ProjectCard from "./../ProjectCard/ProjectCard";
import "./projects.css";

// project
const projects = [
  {
    id: 1,
    projectName: "Node.js Blog Application",
    projectDescription:
      "A blog application, with multiple user & user dashboard.",
    img: blogApp,
    clientGithub: "https://github.com/muhammad-alamin1/blog-application",
    serverGithub: "https://github.com/muhammad-alamin1/blog-application",
    live: "https://blog-application01.herokuapp.com/",
  },
  {
    id: 2,
    projectName: "Quiz Application",
    projectDescription: "Online programming quiz application.",
    img: quizApp,
    clientGithub: "https://github.com/muhammad-alamin1/quiz-app",
    serverGithub: "https://github.com/muhammad-alamin1/quiz-app",
    live: "https://programming-quiz-app2303.netlify.app/",
  },
  {
    id: 3,
    projectName: "Life Care",
    projectDescription:
      "The application has been created for online based healthcare.",
    img: doctor,
    clientGithub: "https://github.com/muhammad-alamin1/doctor-portal-client",
    serverGithub: "https://github.com/muhammad-alamin1/doctor-portal-server",
    live: "https://dynamic-alpaca-3d47d4.netlify.app/",
  },
  {
    id: 4,
    projectName: "BD Online Shop",
    projectDescription: "An e-commerce application",
    img: shop,
    clientGithub: "https://github.com/muhammad-alamin1/bd-online-shop",
    serverGithub: "https://github.com/muhammad-alamin1/my-portfolio-server",
    live: "https://bd-online-shop-011b15.netlify.app/",
  },
  {
    id: 5,
    projectName: "Book Shop",
    projectDescription: "Online E-commerce book shop",
    img: bookShop,
    clientGithub: "https://github.com/muhammad-alamin1/book-shop-client",
    serverGithub: "https://github.com/muhammad-alamin1/book-shop-server",
    live: "https://book-shop2303.netlify.app/",
  },
];

export default function Projects() {
  return (
    <div id="project">
      <div className="container">
        <div id="my-projects">
          <div className="row">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
