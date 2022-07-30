import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './timeline.css';

interface TimelineInfo{
    start: string;
    end: string;
    title: string;
    degree: string;
}

const Timeline = (props:TimelineInfo) => {
    const {start, end, title, degree} = props;
    
  return (
    <Row className="timeline">
        <Col xs={12} md={12}>
            <div className="list-inner d-flex align-items-center">
                <div className="time">
                    <span>{start} - {end}</span>
                </div>
                <div className="place">
                    <h4>{title}</h4>
                    <span>{degree}</span>
                </div>
            </div>
        </Col>
    </Row>
  )
}

export default Timeline