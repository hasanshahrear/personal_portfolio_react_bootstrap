import React from 'react';
import {Container, Row, Col, Stack} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faBehance } from '@fortawesome/free-brands-svg-icons';

import './footer.css';

const Footer = () => {
  return (
    <div className="footer py-4">
        <Container>
            <Row className="align-items-center g-3">
                <Col xs={{span: 12, order: 2,}} md={{span: 6, order: 1}} >
                    <p className='copyright-text text-center text-md-start'>Copyright @2022 All right to reserved.</p>
                </Col>
                <Col xs={{span: 12, order: 1}} md={{span: 6, order: 2}}>
                    <Stack className='mx-auto justify-content-center justify-content-md-end social-icons' direction="horizontal" gap={{xs:3, lg: 3}}>
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