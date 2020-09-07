import React from 'react';
import './footer.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input,} from 'reactstrap';

const Footer = (props) =>{
    const [modal, setModal] = React.useState(false);
    const toggle = () => setModal(!modal);

    return(
        <div className="container-fluid footer">
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader><h2 className="modal-header-text">Get in Touch</h2></ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label htmlFor="name">Name</Label>
                            <Input type="text" name="name" id="name" placeholder="Usula Gurnmeister"/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="email">Email ID</Label>
                            <Input type="email" name="email" id="email" placeholder="support@ursula1288.com"/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="subject">Subject</Label>
                            <Input type="text" name="subject" id="subject"/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="description">description</Label>
                            <Input type="textarea" name="description" id="description" placeholder="Enter the text"/>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" size="lg" type="submit">Send Message</Button>
                </ModalFooter>
            </Modal>
            <div className="row">
                <div className="col-12 col-md-8 offset-md-2 footer-overlay">
                    <div className="row mt-5">
                        <div className="col-12 col-md-6 ml-3 mb-2">
                            <h3 className="footer-text">Forget Andrew Experience, Wanna Jenny's experience?</h3>
                        </div>
                        <div className="col-12 col-md-3 offset-md-2 mt-1">
                            <Button id="footer-button" className="mb-2" onClick={toggle}><strong>Hit Us Now</strong></Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 offset-md-2 mt-4">
                    <span className="footer-text-2">All Rights Reserved ©Simon. Designed by DigitalHeaps</span>
                </div>
                <div className="col-12 col-md-3 offset-md-2 mt-4">
                    <i className="fab fa-facebook-f mr-3 fb-icon"/>
                    <i className="fab fa-twitter mr-3 tt-icon"/>
                    <i className="fab fa-linkedin-in mr-3 ld-icon"/>
                    <i className="fab fa-google-plus-g g-icon"/>
                </div>
            </div>
        </div>
    );
}

export default Footer;