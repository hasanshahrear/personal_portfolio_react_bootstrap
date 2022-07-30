import React from 'react';
import HeroImage from '../../assets/img/hero.png';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Typed from 'react-typed';
import './hero.css'

const Hero = () => {
  return (
    <section className='hero d-flex align-items-center position-relative' id="home">
        <Container>
            <Row>
                <Col  xs={{order: 2}} lg={{span: 6, order: 1}} className="d-flex justify-content-center flex-column">
                    <p className='designation'>
                        <Typed strings={['Web Developer', 'Web Designer', 'UI/UX Designer']} loop typeSpeed={50} backSpeed={40} />
                    </p>
                    <h1>Hi i’m Sophia</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus, pellentesque mauris sit donec sem augue diam libero, sit.  Eget viverra id et nibh sed tellus, platea et. 
                    </p>
                    <Button className='w-fit-content btn-custom-1'>Hire Me</Button>
                </Col>
                <Col xs={{order: 1}} lg={{span: 6, order: 2 }} className="text-center text-lg-start">
                    <img src={HeroImage} alt="hero_image" className='img-fluid hero-img' />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Hero