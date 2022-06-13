import React from "react";
import C_plus_plus from "../../img/c++.png";
import C_prog from "../../img/C_programming.png";
import express from "../../img/express2.jfif";
import firebase from "../../img/firebase.png";
import javaScript from "../../img/javaScript.png";
import mongo from "../../img/mongo.png";
import muhammad from "../../img/muhammad.jpeg";
import mySql from "../../img/my-sql.jpeg";
import node from "../../img/node_js.png";
import python from "../../img/python.jpeg";
import react from "../../img/react.png";
import sql from "../../img/sql.jpeg";
import TS from "../../img/typeScript.png";
import SkillCard from "../SkillCard/SkillCard";
import "./about.css";

const skillImg = [
  {
    id: 1,
    img: javaScript,
    title: "JavaScript",
  },
  {
    id: 2,
    img: node,
    title: "Node JS",
  },
  {
    id: 3,
    img: react,
    title: "React JS",
  },
  {
    id: 4,
    img: python,
    title: "Python",
  },
  {
    id: 5,
    img: C_prog,
    title: "C-Programming",
  },
  {
    id: 6,
    img: C_plus_plus,
    title: "C++",
  },
  {
    id: 7,
    img: express,
    title: "Express JS",
  },
  {
    id: 8,
    img: sql,
    title: "Structured Query Language (SQL)",
  },
  {
    id: 9,
    img: mySql,
    title: "MySql",
  },
  {
    id: 10,
    img: mongo,
    title: "Mongo DB",
  },
  {
    id: 11,
    img: firebase,
    title: "Firebase",
  },
  {
    id: 12,
    img: TS,
    title: "TypeScript",
  },
];

export default function About() {
  return (
    <div id="about-section">
      <section className="container">
        <div className="row about-section">
          <div className="col-12  col-lg-6 about-left-side ">
            <div className="about-me">
              <div className="img">
                <img src={muhammad} alt="muhammad" className="img-fluid" />
                <p style={{ marginTop: "10px" }}>
                  <strong>Name: </strong>Muhammad
                </p>
                <p>
                  <strong>Profile: </strong>NodeJS & ReactJS Developer
                </p>
                <p>
                  <strong>Email: </strong>
                  <a href="mailto:muhammad.alamindev01@gmail.com">
                    muhammad.alamindev01@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Phone: </strong>(+88) 01315792303
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 about-right-side ">
            <h2 className="text-center">About Me</h2>
            <p>
              An aspiring NodeJS Developer. I lost myself when I dive into the
              codes. I have completed React and nodeJS. I count myself as a
              hardworking person.{" "}
            </p>
            <p>
              A goal-getter and a self-starter with huge knowledge and
              proficiency in JavaScript, NodeJS, Python and so on.
            </p>
            <p>
              I have over 2 years of working experience across the entire stack
              of web development. Adept creation of script using javaScript to
              convey unique branding and promote sales and marketing
              opportunities. Supporting intricate Full-stack needs and lending
              assistance throughout webpage lifecycle.
            </p>
          </div>
        </div>
      </section>
      <section id="skill-section" className="container">
        <h2 className="text-center mb-5">My Skill</h2>
        <div className="row">
          {skillImg.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </section>
    </div>
  );
}
