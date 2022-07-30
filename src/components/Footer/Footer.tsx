import React from 'react';
import {Container, Row, Col, Stack} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faBehance } from '@fortawesome/free-brands-svg-icons';

import './footer.css';

const Footer = () => {
  return (
    <div className="footer py-3">
        <Container>
            <Row className="align-items-center">
                <Col xs={12}  lg={6}>
                    <p className='copyright-text'>Copyright @2022 All right to reserved.</p>
                </Col>
                <Col xs={12} lg={6}>
                    <Stack className='mx-auto justify-content-md-end social-icons' direction="horizontal" gap={{xs:3, lg: 3}}>
                        <a href='#'><FontAwesomeIcon icon={faFacebookF} /> </a>
                        <a href='#'><FontAwesomeIcon icon={faTwitter} /> </a>
                        <a href='#'><FontAwesomeIcon icon={faLinkedinIn} /> </a>
                        <a href='#'><FontAwesomeIcon icon={faBehance} /> </a>
                    </Stack>
                </Col>
                
            </Row>
        </Container>
    </div>
  )
}

export default Footer