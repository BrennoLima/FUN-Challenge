import React from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, Button, Jumbotron} from 'reactstrap'
import { Image } from 'react-bootstrap'
import './header.css'
import dummyimg from '../../assets/images/dummy-header.png'

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return(
        <div className="container header">
                <Navbar color="white" light expand="md">
                    <Button outline color="primary" id="btn-simon">SIMON</Button>
                    <NavbarToggler onClick={toggle}/>
                    <Collapse isOpen={isOpen} navbar >
                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <NavLink href="/" className="nav-link">Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/" className="nav-link">Pricing</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/" className="nav-link">FAQs</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/" className="nav-link">Blog</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/" className="nav-link" id="sign-in-link">Sign-in</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Jumbotron className="mt-5" id="jumbotron">
                    <div className="row">
                        <div className="col-12 col-md-6 offset-md-1 mt-5 align-self-start">
                            <div className="header-text">
                                <h3>Unlimited is Over Crowded</h3>
                                <p id="header-text-body">The word is real content during design can distract designers and design review teams alike away from the design, and insisting on always</p>
                                <Button color="primary" id="btn-hire" className="mb-5">Hire Us Now</Button>
                            </div>
                        </div>
                        <div className="col-12 col-md-5">
                            <Image src={dummyimg} alt="Dummy-img header" fluid/>
                        </div>
                    </div>
                    
                    
                </Jumbotron>
        </div>
    );
    
}

export default Header;