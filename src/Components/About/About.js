import './about.css';
import React from 'react';
import SkillCard from '../SkillCard/SkillCard';
import muhammad from '../../img/muhammad.jpg';
import react from '../../img/react.png';
import javaScript from '../../img/javaScript.png';
import bootstrap from '../../img/bootstrap.jfif';
import C_prog from '../../img/C_programming.png';
import es6 from '../../img/es6.png';
import express from '../../img/express2.jfif';
import firebase from '../../img/firebase.png';
import git from '../../img/git.png';
import heroku from '../../img/heroku.png';
import material from '../../img/material_ui.jfif';
import mongo from '../../img/mongo.png';
import node from '../../img/node_js.png';
import netlify from '../../img/netlify.jfif';
import postman from '../../img/postman.png';
import TS from '../../img/typeScript.png';
import C_plus_plus from '../../img/c++.png';


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
        img: es6,
        title: 'ES6',
    },
    {
        id: 4,
        img: react,
        title: 'React JS',

    },
    {
        id: 5,
        img: node,
        title: 'Node JS',
    },
    {
        id: 6,
        img: express,
        title: 'Express JS',
    },
    {
        id: 7,
        img: mongo,
        title: 'Mongo DB',
    },
    {
        id: 8,
        img: firebase,
        title: 'Firebase',
    },
    {
        id: 9,
        img: TS,
        title: 'TypeScript',
    },
    {
        id: 10,
        img: material,
        title: 'Material UI',
    },
    {
        id: 11,
        img: bootstrap,
        title: 'Bootstrap',
    },
    {
        id: 12,
        img: heroku,
        title: 'Heroku',
    },
    {
        id: 13,
        img: netlify,
        title: 'Netlify',
    },
    {
        id: 14,
        img: git,
        title: 'Git',
    },
    {
        id: 15,
        img: postman,
        title: 'POSTMAN',
    },
    {
        id: 15,
        img: C_plus_plus,
        title: 'C++',
    },
]

export default function About() {
    return (
        <div id="about-section">
            <section className="container">
                <div className="row about-section">
                    <div className="col-12  col-lg-6 about-left-side ">
                        <div className="about-me">
                            <div className="img">
                                <img src={muhammad} alt="muhammad" />
                            </div>
                            <div className="">
                                <p><strong>Name: </strong>Muhammad</p>
                                <p><strong>Profile: </strong>Web Developer</p>
                                <p><strong>Email: </strong><a href="mailto:muhammad.alamindev01@gmail.com">muhammad.alamindev01@gmail.com</a></p>
                                <p><strong>Phone: </strong>(+88) 01315792303</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 about-right-side ">
                        <h2 className="text-center">About Me</h2>
                        <p>An aspiring MERN Stack Developer.I lost myself when I dive into the codes. I am a professional web developer.No project is too big or too small for me. Recently I have completed react and node js. </p>
                        <p>A goal-getter and a self-starter with huge knowledge and proficiency in JavaScript, React JS, ES6, responsive web development, and so on.</p>
                        <p>Resourceful Web Developer lends hands-on approach to customizing web presence strategy. More than 1.5 years of experience working closely with Web Development to outline organizational needs and translate them into extensive lines of code that support objectives. Adept creation of scripts using HTML, CSS and JavaScript to convey unique branding and promote sales and marketing opportunities. Specialty supporting intricate backend needs and lending assistance throughout webpage lifecycle.</p>
                    </div>
                </div>
            </section>
            <section id="skill-section" className="container">
                <h2 className="text-center mb-5">My Skill</h2>
                <div className="row">
                    {
                        skillImg.map((skill) => <SkillCard key={skill.id} skill={skill} />)
                    }
                </div>
            </section>
        </div>
    )
}
