import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import cover from '../../img/bg.jpg';
import blogApp from '../../img/blog-app.png';
import C_prog from '../../img/c.jpeg';
import lifeCare from '../../img/life-care.png';
import muhammad from '../../img/muhammad.jpeg';
import node from '../../img/node_js.png';
import python from '../../img/python.jpeg';
import quizApp from '../../img/quiz-app.png';
import react from '../../img/react.png';
import ProjectCard from '../ProjectCard/ProjectCard';
import SkillCard from '../SkillCard/SkillCard';
import './home.css';

// Skill 
const skillImg = [
    {
        id: 1,
        img: node,
        title: 'Node JS',
    },
    {
        id: 2,
        img: react,
        title: 'React JS',

    },
    {
        id: 3,
        img: C_prog,
        title: 'C-Programming',
    },
    {
        id: 4,
        img: python,
        title: 'Python',
    },
]

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
        img: lifeCare,
        clientGithub: 'https://github.com/muhammad-alamin1/life-care-client',
        serverGithub: 'https://github.com/muhammad-alamin1/life-care-server',
        live: 'https://dynamic-alpaca-3d47d4.netlify.app/'
    },


]

export default function Home() {
    const typeTarget = useRef(null);

    useEffect(() => {
        const typed = new Typed(typeTarget.current, {
            strings: ["Node.js Developer", "React Developer"],
            typeSpeed: 70,
            backSpeed: 50,
            loop: Infinity,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="top" id="home-section">
            <section className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 home-left-side text-center ">
                        <img src={muhammad} alt="muhammad" className="img-fluid" />
                        <h4 className="my-3">Hi, there! ⚡ I'm</h4>
                        <h2>muhammad</h2>
                        <h4 className="type-ani"><strong ref={typeTarget}></strong></h4>
                        <div className="about-btn">
                            <button className="btn"><Link to="/about">About Me</Link></button>
                            <button className="btn">
                                <a href="https://drive.google.com/file/d/1hn_DSMk2QgemtdrkhkrcPcmEbYXjLLLB/view?usp=sharing" target="_blank">Download Resume</a></button>
                        </div>
                    </div>
                    <div className="col-sm-0 col-md-6 home-right-side">
                        <img src={cover} alt="cover" className="img-fluid" />
                    </div>
                </div>
            </section>
            <div className="home-page-skill text-center">
                <h2 className="text-center">My Skill</h2>
                <div className="container">
                    <div className="row">
                        {
                            skillImg.map((skill) => <SkillCard key={skill.id} skill={skill} />)
                        }
                    </div>
                    <button className="btn" id="home-skill-btn" style={{ marginTop: '40px' }}><Link to="/about">See More</Link></button>
                </div>
            </div>
            <div className="home-page-project text-center">
                <h2 className="text-center">My Project</h2>
                <div className="container">
                    <div className="row">
                        {
                            projects.map((project) => <ProjectCard key={project.id} project={project} />)
                        }
                    </div>
                    <button className="btn" style={{ marginTop: '40px' }}><Link to="/projects">See More</Link></button>
                </div>
            </div>
        </div>
    )
}
