import React from 'react';
import { Image } from 'react-bootstrap'
import icon1 from '../../assets/images/features-icon-1.png'
import icon2 from '../../assets/images/features-icon-2.png'
import icon3 from '../../assets/images/features-icon-3.png'
import icon4 from '../../assets/images/features-icon-4.png'
import './features.css'

const Features = () => {

    return(
        <div className="container-fluid features mb-5">
            <div className="row row-content">
                <div className="col-12 mt-5 mb-5" >
                    <h3><strong>Like Andrew, We don’t your step-back from your success</strong></h3>
                    <h2><strong><mark className="blue">Need Quality? have Time? Hire Us</mark></strong></h2>
                    <h2>For</h2>
                </div>
            </div>
            <div className="row row-content mt-2">
                <div className="col-12 col-md-2 offset-md-2 col-content">
                    <Image src={icon1} alt="Icon1" fluid/>
                    <h6 className="mt-3"><strong>Product: Design</strong></h6>
                    <p className="features-text">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth por scientie..,</p>
                </div>
                <div className="col-12 col-md-2 col-content">
                    <Image src={icon2} alt="Icon2" fluid/>
                    <h6 className="mt-3"><strong>Development</strong></h6>
                    <p className="features-text">At solmen va esser necessi far uniform grammatica, pronunciation elu sommun paroles..,</p>
                </div>
                <div className="col-12 col-md-2 col-content">
                    <Image src={icon3} alt="Icon3" fluid/>
                    <h6 className="mt-3"><strong>Testings</strong></h6>
                    <p className="features-text">Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores..,</p>
                </div>
                <div className="col-12 col-md-2 col-content">
                    <Image src={icon4} alt="Icon4" fluid/>
                    <h6 className="mt-3"><strong>Deployment</strong></h6>
                    <p className="features-text">Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules..,</p>
                </div>
            </div>
        </div>
    );
}

export default Features;