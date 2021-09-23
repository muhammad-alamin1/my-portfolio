import './projectCard.css';
import React from 'react';

export default function ProjectCard(props) {
    // console.log(props)
    const { projectName, projectDescription, img, github, live } = props.project;
    return (
        <div className="" id="card-container">
            <div className="box ">
                <img src={img} alt="img" className="img-fluid" />
                <div className="box-content">
                    <h3 id="card-title" className="title">{projectName}</h3>
                    <span id="card-description" className="post">{projectDescription}</span>
                </div>
                <ul class="icon">
                    <li><a href={github} target="_blank"><i class="fab fa-github"></i></a></li>
                    <li><a href={live} target="_blank"><i className="fas fa-link"></i></a></li>
                </ul>
            </div>
        </div>
    )
}
