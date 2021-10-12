import './projects.css';
import React from 'react';
import node from '../../img/node_js.png';
import pioneer from '../../img/pioneer-bank.png';
import leaugeDetails from '../../img/leauge-details.png';
import hard from '../../img/hard-rock.png';
import team from '../../img/team.png';
import weather from '../../img/weather.png';
import transfer from '../../img/trnasfer.png';
import doctor from '../../img/doctor.png';
import ProjectCard from './../ProjectCard/ProjectCard';
import bookShop from '../../img/bookShop.png';
import Amazon from '../../img/Amazon.png';


// project
const projects = [
    {
        id: 1,
        projectName: 'doctor-portal',
        projectDescription: 'lorem ipsum dolar lorem ipsum dolar ',
        img: node,
        clientGithub: '',
        serverGithub: '',
        live: ''
    },
    {
        id: 2,
        projectName: 'Amazon Online Shop',
        projectDescription: 'Amazon Online Shopping.',
        img: Amazon,
        clientGithub: 'https://github.com/muhammad-alamin1/amazon-client',
        serverGithub: 'https://github.com/muhammad-alamin1/amazon-server',
        live: 'https://amajon-8a23a.firebaseapp.com/'
    },
    {
        id: 3,
        projectName: 'Book Shop',
        projectDescription: 'The application has been created for online book shop.',
        img: bookShop,
        clientGithub: 'https://github.com/muhammad-alamin1/book-shop-client',
        serverGithub: 'https://github.com/muhammad-alamin1/book-shop-server',
        live: 'https://book-shop-28a9a.web.app/'
    },
    {
        id: 4,
        projectName: 'Doctor Portal',
        projectDescription: 'The application has been created for online based healthcare.',
        img: doctor,
        clientGithub: 'https://github.com/muhammad-alamin1/doctor-portal-client',
        serverGithub: 'https://github.com/muhammad-alamin1/doctor-portal-server',
        live: 'https://doctor-portal01.netlify.app/'
    },
    {
        id: 5,
        projectName: 'Transfer Market',
        projectDescription: 'Real Madid football\'s annual turnover has been calculated using local data.',
        img: transfer,
        clientGithub: 'https://github.com/muhammad-alamin1/football-transfer-market',
        serverGithub: 'https://github.com/muhammad-alamin1/football-transfer-market',
        live: 'https://relaxed-shockley-2fbae9.netlify.app'
    },
    {
        id: 6,
        projectName: 'Weather API',
        projectDescription: 'Here you will find every moment\'s temperature updated',
        img: weather,
        clientGithub: 'https://github.com/muhammad-alamin1/weather-API/',
        serverGithub: 'https://github.com/muhammad-alamin1/weather-API/',
        live: 'https://muhammad-alamin1.github.io/weather-API/'
    },
    {
        id: 7,
        projectName: 'Team Selection',
        projectDescription: 'Pick players for starting-11 from all Real Madrid players in any season.',
        img: team,
        clientGithub: 'https://github.com/muhammad-alamin1/player-selection',
        serverGithub: 'https://github.com/muhammad-alamin1/player-selection',
        live: 'https://reverent-benz-821bc5.netlify.app'
    },
    {
        id: 8,
        projectName: 'Hard Rock',
        projectDescription: 'This Application wil search for the song of your choice',
        img: hard,
        clientGithub: 'https://github.com/muhammad-alamin1/Hard-Rock/',
        serverGithub: 'https://github.com/muhammad-alamin1/Hard-Rock/',
        live: 'https://muhammad-alamin1.github.io/Hard-Rock/'
    },
    {
        id: 9,
        projectName: 'European League Details',
        projectDescription: 'This Application discusses the football leagues of some European countries',
        img: leaugeDetails,
        clientGithub: 'https://github.com/muhammad-alamin1/leagues-details',
        serverGithub: 'https://github.com/muhammad-alamin1/leagues-details',
        live: 'https://jovial-hodgkin-d2538f.netlify.app/'
    },
    {
        id: 10,
        projectName: 'Pioneer Bank',
        projectDescription: 'A general static site of a bank has been created using javaScript DOM.',
        img: pioneer,
        clientGithub: 'https://github.com/muhammad-alamin1/pioneer-bank',
        serverGithub: 'https://github.com/muhammad-alamin1/pioneer-bank',
        live: 'https://muhammad-alamin1.github.io/pioneer-bank/'
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
