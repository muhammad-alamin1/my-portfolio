import React from 'react';
import blogApp from '../../img/blog-app.png';
import Burj from '../../img/burj.png';
import doctor from '../../img/doctor.png';
import hard from '../../img/hard-rock.png';
import leaugeDetails from '../../img/leauge-details.png';
import pioneer from '../../img/pioneer-bank.png';
import quizApp from '../../img/quiz-app.png';
import team from '../../img/team.png';
import transfer from '../../img/trnasfer.png';
import weather from '../../img/weather.png';
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
        projectName: 'Doctor Portal',
        projectDescription: 'The application has been created for online based healthcare.',
        img: doctor,
        clientGithub: 'https://github.com/muhammad-alamin1/doctor-portal-client',
        serverGithub: 'https://github.com/muhammad-alamin1/doctor-portal-server',
        live: 'https://doctor-portal01.netlify.app/'
    },
    {
        id: 4,
        projectName: 'Burj Al Arab',
        projectDescription: 'This application has been created for online room booking.',
        img: Burj,
        clientGithub: 'https://github.com/muhammad-alamin1/burj-al-khalifa-client',
        serverGithub: 'https://github.com/muhammad-alamin1/burj-al-khalifa-server',
        live: 'https://burj-al-khalifa-21526.firebaseapp.com/'
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
