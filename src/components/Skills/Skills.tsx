import React from 'react'
import { ProgressBar, Row, Col } from 'react-bootstrap'
import './skills.css'

type SkillInfo = {
    skill: string;
    percentage: number;
}

const Skills = (skills:SkillInfo) => {
  const {skill, percentage} = skills;
  return (
    <Row className="skill">
        <Col xs={12} md={8}>
            <label>{skill}</label>
            <ProgressBar now={percentage} label={`${percentage}%`}/>
        </Col>
    </Row>
  )
}

export default Skills