import React from 'react';
import { Row, Col } from 'react-bootstrap';
import certificate1 from '../../assets/img/certificate.jpg'

const Certificate = () => {
  return (
    <Row >
        <Col sx={12} md={6} className='mb-3'>
            <img src={certificate1} alt="certificate_image" className='img-fluid' />
        </Col>
        <Col sx={12} md={6} className='mb-3'>
            <img src={certificate1} alt="certificate_image" className='img-fluid' />
        </Col>
        <Col sx={12} md={6} className='mb-3'>
            <img src={certificate1} alt="certificate_image" className='img-fluid' />
        </Col>
        <Col sx={12} md={6} className='mb-3'>
            <img src={certificate1} alt="certificate_image" className='img-fluid' />
        </Col>
    </Row>
  )
}

export default Certificate