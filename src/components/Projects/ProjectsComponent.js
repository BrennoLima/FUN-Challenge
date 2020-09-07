import React from 'react';
import './projects.css'
import {Image} from 'react-bootstrap'
import icon1 from '../../assets/images/projects-icon-1.png'
import icon2 from '../../assets/images/projects-icon-2.png'
import icon3 from '../../assets/images/projects-icon-3.png'
import icon4 from '../../assets/images/projects-icon-4.png'
import icon5 from '../../assets/images/projects-icon-5.png'
import icon6 from '../../assets/images/projects-icon-6.png'
import icon7 from '../../assets/images/projects-icon-7.png'
import icon8 from '../../assets/images/projects-icon-8.png'

const Projects = () => {

    return(
        <div className="container projects">
            <div className="row row-content-projects">
                <div className="col-12 col-md-4 offset-md-4 mt-5">
                    <h2 className="projects-title">Some of our Projects</h2>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12 col-md-3">
                    <Image src={icon1} alt="Project icon 1" fluid/>
                </div>
                <div className="col-12 col-md-3">
                    <Image src={icon2} alt="Project icon 2" fluid/>
                </div>
                <div className="col-12 col-md-3">
                    <Image src={icon3} alt="Project icon 3" fluid/>
                </div>
                <div className="col-12 col-md-3">
                    <Image src={icon4} alt="Project icon 4" fluid/>
                </div>
            </div>
            <div className="row second-row-icons">
                <div className="col-12 col-md-3 offset-md-3">
                    <Image src={icon5} alt="Project icon 5" fluid/>
                </div>
                <div className="col-12 col-md-3 mb-5">
                    <Image src={icon6} alt="Project icon 6" fluid/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12 col-md-6 offset-md-3 mt-2">
                    <span className="project-text">Don't forget to check us on</span><Image src={icon7} alt="Project icon 7"/>
                    <span className="project-text">Dribbble</span><Image src={icon8} alt="Project icon 8"/>
                    <span className="project-text">Behance</span>
                </div>
                
            </div>
        </div>
    );
}

export default Projects;