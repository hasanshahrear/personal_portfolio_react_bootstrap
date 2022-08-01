import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import {Heading} from '../../components';
import './Contact.css';
import ContactImage from '../../assets/img/about.png'

const Contact = () => {
  return (
    <div className="contact" id="contact">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} lg={7} xl={6}>
                    <Heading text="Hire me" />
                    <Form>
                        <Form.Control type="text" placeholder="Your Name" />
                        <Form.Control type="email" placeholder="Your Email" />
                        <Form.Control as="textarea" placeholder="Message"  rows={5}  />
                        <Button variant="primary" type="submit" className="btn-custom-1">
                            SUBMIT
                        </Button>
                    </Form>
                </Col>
                <Col className='d-none d-lg-block' lg={5} xl={6}>
                    <div className='contact-img'>
                        <img src={ContactImage} alt="contact_image" className="img-fluid" />
                    </div>
                </Col>

            </Row>
        </Container>
    </div>
  )
}

export default Contact