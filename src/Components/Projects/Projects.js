import React from 'react';
import blogApp from '../../img/blog-app.png';
import doctor from '../../img/life-care.png';
import quizApp from '../../img/quiz-app.png';
import ProjectCard from './../ProjectCard/ProjectCard';
import './projects.css';


// project
const projects = [
    {
        id: 1,
        projectName: 'Node.js Blog Application',
        projectDescription: 'A blog application, with multiple user & user dashboard.',
        img: blogApp,
        clientGithub: 'https://github.com/muhammad-alamin1/blog-application',
        serverGithub: 'https://github.com/muhammad-alamin1/blog-application',
        live: 'https://blog-application01.herokuapp.com/'
    },
    {
        id: 2,
        projectName: 'Quiz Application',
        projectDescription: 'Online programming quiz application.',
        img: quizApp,
        clientGithub: 'https://github.com/muhammad-alamin1/quiz-app',
        serverGithub: 'https://github.com/muhammad-alamin1/quiz-app',
        live: 'https://programming-quiz-app2303.netlify.app/'
    },
    {
        id: 3,
        projectName: 'Life Care',
        projectDescription: 'The application has been created for online based healthcare.',
        img: doctor,
        clientGithub: 'https://github.com/muhammad-alamin1/doctor-portal-client',
        serverGithub: 'https://github.com/muhammad-alamin1/doctor-portal-server',
        live: 'https://dynamic-alpaca-3d47d4.netlify.app/'
    },
]

export default function Projects() {
    return (
        <div id="project" >
            <div className="container">
                <div id="my-projects">
                    <div className="row">
                        {
                            projects.map((project) => <ProjectCard key={project.id} project={project} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
