import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Service} from '../../components';
import './services.css'

import icon1 from '../../assets/img/icon1.png'
import icon2 from '../../assets/img/icon2.png'
import icon3 from '../../assets/img/icon3.png'


const Services = () => {
  return (
    <div className="services">
        <Container>
            <Row>
                <Col xs={12} lg={4} className="mb-3">
                    <Service url={icon1} title="Web Design" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus non mus semper vestibulum.' />
                </Col>
                <Col xs={12} lg={4} className="mb-3">
                    <Service url={icon2} title="Graphics Design" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus non mus semper vestibulum.' />
                </Col>
                <Col xs={12} lg={4} className="mb-3">
                    <Service url={icon3} title="Brand Identy" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus non mus semper vestibulum.' />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Services