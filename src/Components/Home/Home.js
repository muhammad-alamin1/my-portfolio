import './home.css';
import React, { useRef, useEffect } from 'react';
import muhammad from '../../img/muhammad.jpg';
import cover from '../../img/cover.jpg';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';
import C_prog from '../../img/C_programming.png';
import javaScript from '../../img/javaScript.png';
import es6 from '../../img/es6.png';
import react from '../../img/react.png';
import SkillCard from '../SkillCard/SkillCard';
import node from '../../img/node_js.png';
import ProjectCard from '../ProjectCard/ProjectCard';

// Skill 
const skillImg = [
    {
        id: 1,
        img: C_prog,
        title: 'C-Programming',
    },
    {
        id: 2,
        img: javaScript,
        title: 'JavaScript',
    },
    {
        id: 3,
        img: react,
        title: 'React JS',

    },
    {
        id: 4,
        img: node,
        title: 'Node JS',
    },
]


// project
const projects = [
    {
        id: 1,
        projectName: 'doctor-portal',
        projectDescription: 'lorem ipsum dolar lorem ipsum dolar ',
        img: node,
    },
    {
        id: 2,
        projectName: 'Appoints',
        projectDescription: 'lorem ipsum dolar lorem ipsum dolar ',
        img: react,
    },
    {
        id: 3,
        projectName: 'Programming',
        projectDescription: 'lorem ipsum dolar lorem ipsum dolar',
        img: es6,
    },
    {
        id: 4,
        projectName: 'Transfer-market',
        projectDescription: 'lorem ipsum dolar lorem ipsum dolar ',
        img: C_prog,
    },
    
]

export default function Home() {
    const typeTarget = useRef(null);

    useEffect(() => {
        const typed = new Typed(typeTarget.current, {
            strings: ["A MERN Stack Web Developer.", "An interactive Front-end Web Developer."],
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
                        <img src={muhammad} alt="muhammad" className="" />
                        <h4 className="my-3">Hello, I'm </h4>
                        <h2>muhammad</h2>
                        <h4 className="type-ani"><strong ref={typeTarget}></strong></h4>
                        <div className="about-btn">
                            <button className="btn"><Link to="/about">About Me</Link></button>
                            <button className="btn"><Link to="/contact">Download Resume</Link></button>
                        </div>
                    </div>
                    <div className="col-sm-0 col-md-6 home-right-side">
                        <img src={cover} alt="cover" />
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
                    <button className="btn"  style={{marginTop:'48px'}}><Link to="/about">See More</Link></button>
                </div>
            </div>
            <div className="home-page-project text-center">
                <h2 className="text-center">My Project</h2>
                <div className="container">
                    <div className="row">
                        {
                             projects.map((project) =><ProjectCard key={project.id} project={project}/>)
                        }
                    </div>
                    <button className="btn" style={{marginTop:'48px'}}><Link to="/projects">See More</Link></button>
                </div>
            </div>
        </div>
    )
}
