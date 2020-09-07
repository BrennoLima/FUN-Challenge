import React, {Component} from 'react';
import Header from './Header/HeaderComponent';
import Footer from './Footer/FooterComponent';
import Projects from './Projects/ProjectsComponent';
import Testimonial from './Testimonial/TestimonialComponent';
import Features from './Features/FeaturesComponent';
import About from './About/AboutComponent';

class Main extends Component{

    render(){
        return(
            <React.Fragment>
                <Header/>
                <About/>
                <Features/>
                <Testimonial/>
                <Projects/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Main;