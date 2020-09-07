import React from 'react';
import './about.css'
import dummyimg from '../../assets/images/dummy-about.png'
import {Image} from 'react-bootstrap'

const About = () => {

    return(
        <div className="container-fluid about">
            <div className="row">
                <div className="col-12 col-md-2 offset-md-2">
                    <Image src={dummyimg} alt="Dummy-img about" id="dummy-img-about" fluid/>
                </div>
                <div className="col-12 col-md-6 about-text mt-5">
                    <h3>Hello, My Name is <mark className="blue">Andrew Theodore</mark></h3>
                    <p id="about-text-body-1" className="mt-3">The argument in favor of using filler text goes something like this: If you use real content in the design process, anytime you reach a review point you end up reviewing and negotiating the content. Design first, with real content in mind (of course!), but don’t drop in the real content until the design is well on its way. Using filler text avoids the inevitable argumentation that accompanies.</p>
                    <p id="about-text-body-2"><strong><i>“ Real content during design can distract designers and design review teams alike away from design insisting on always use publication-ready content a real drag on the design process.”</i></strong></p>
                    <p id="about-text-body-3">Only use filler text that has been edited for length and format to match the characteristics of real content as closely as possible, and use real content where possible. Design is an evolutionary process, and filler text is just one tool in your progress-pushing arsenal. Use it where it makes sense to use it, and pull it once the natural process indicates.</p>
                    <p id="about-text-body-4"><strong><i>I Learned finally quality, time, price, are inverve proposal.!</i></strong></p>
                </div>
            </div>
        </div>
    )
}

export default About;