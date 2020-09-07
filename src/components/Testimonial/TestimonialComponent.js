import React from 'react';
import './testimonial.css'
import {Image, Media} from 'react-bootstrap'
import quotes from '../../assets/images/quotes.png'
import placeholder from '../../assets/images/testimonial-placeholder-img.png'

const Testimonial = () => {

    return(
        <div className="container-fluid testimonial">
            <div className="row row-content-1">
                <div className="col-12 col-md-6 offset-md-3">
                    <h3 className="testimonial-title mt-5">See, What Jenny, Giga, Davis telling about us</h3>
                </div>
            </div>
            <div className="container">
                <div className="row row-content-2">
                    <div className="col-12 col-md-4 offset-md-2 box-1">
                        <Media>
                            <Image className="mt-4" src={quotes} alt="Quotes"/>
                            <Media.Body className="ml-2">
                                <br/><br/>
                                <p className="media-text">“The argument in favor of using filler text goes something like this: If you use real content in the design process, anytime you reach a review point you’ll end up reviewing the co.”</p>
                                <span className="media-name"><strong >Lurch Schpellchek</strong></span>
                                <span className="media-img"><Image className="mb-3" src={placeholder} alt="Placeholder" fluid/></span><br/>
                                <p className="media-text">Graphic Designer</p>
                            </Media.Body>
                        </Media>
                    </div>

                    <div className="col-12 col-md-4 box-2">
                        <Media>
                            <Image className="mt-4" src={quotes} alt="Quotes"/>
                            <Media.Body className="ml-2">
                                <br/><br/>
                                <p className="media-text">“Using real content during design can distract designers and design review teams alike away from the design, and insisting on always using publication-ready content can be a real.”</p>
                                <span className="media-name"><strong >Fleece Marigold</strong></span>
                                <span className="media-img"><Image className="mb-3" src={placeholder} alt="Placeholder" fluid/> </span><br/>
                                <p className="media-text">Web Designer</p>
                            </Media.Body>
                        </Media>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
}

export default Testimonial;