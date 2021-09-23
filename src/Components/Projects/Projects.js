import './projects.css';
import React from 'react';
import node from '../../img/node_js.png';
import react from '../../img/react.png';
import pioneer from '../../img/pioneer-bank.png';
import es6 from '../../img/pioneer-bank.png';
import leaugeDetails from '../../img/leauge-details.png';
import hard from '../../img/hard-rock.png';
import team from '../../img/team.png';
import weather from '../../img/weather.png';
import transfer from '../../img/trnasfer.png';
import C_prog from '../../img/C_programming.png';
import ProjectCard from './../ProjectCard/ProjectCard';


// project
const projects = [
    {
        id: 1,
        projectName: 'doctor-portal',
        projectDescription: 'lorem ipsum dolar lorem ipsum dolar ',
        img: node,
        github:'',
        live:''
    },
    {
        id: 2,
        projectName: 'Appoints',
        projectDescription: 'lorem ipsum dolar lorem ipsum dolar ',
        img: react,
        github:'',
        live:''
    },
    {
        id: 3,
        projectName: 'Programming',
        projectDescription: 'lorem ipsum dolar lorem ipsum dolar',
        img: es6,
        github:'',
        live:''
    },
    {
        id: 4,
        projectName: 'Transfer-market',
        projectDescription: 'lorem ipsum dolar lorem ipsum dolar ',
        img: C_prog,
        github:'',
        live:''
    },
    {
        id: 5,
        projectName: 'Transfer Market',
        projectDescription: 'Real Madid football\'s annual turnover has been calculated using local data.',
        img: transfer,
        github:'https://github.com/muhammad-alamin1/football-transfer-market',
        live:'https://relaxed-shockley-2fbae9.netlify.app'
    },
    {
        id: 6,
        projectName: 'Weather API',
        projectDescription: 'Here you will find every moment\'s temperature updated',
        img: weather,
        github:'https://github.com/muhammad-alamin1/weather-API/',
        live:'https://muhammad-alamin1.github.io/weather-API/'
    },
    {
        id: 7,
        projectName: 'Team Selection',
        projectDescription: 'Pick players for starting-11 from all Real Madrid players in any season.',
        img: team,
        github:'https://github.com/muhammad-alamin1/player-selection',
        live:'https://reverent-benz-821bc5.netlify.app'
    },
    {
        id: 8,
        projectName: 'Hard Rock',
        projectDescription: 'This Application wil search for the song of your choice',
        img: hard,
        github:'https://github.com/muhammad-alamin1/Hard-Rock/',
        live:'https://muhammad-alamin1.github.io/Hard-Rock/'
    },
    {
        id: 9,
        projectName: 'European League Details',
        projectDescription: 'This Application discusses the football leagues of some European countries',
        img: leaugeDetails,
        github:'https://github.com/muhammad-alamin1/leagues-details',
        live:'https://jovial-hodgkin-d2538f.netlify.app/'
    },
    {
        id: 10,
        projectName: 'Pioneer Bank',
        projectDescription: 'A general static site of a bank has been created using javaScript DOM.',
        img: pioneer,
        github:'https://github.com/muhammad-alamin1/pioneer-bank',
        live:'https://muhammad-alamin1.github.io/pioneer-bank/'
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
