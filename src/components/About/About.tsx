import AboutImage from '../../assets/img/about.png';
import {Container, Row, Col, Tabs, Tab} from 'react-bootstrap';
import './About.css'
import {Skills, Timeline, Certificate, Heading} from '../../components'

const About = () => {
  return (
    <section className='about' id='about'>
        <Container>
            <Row>
                <Col lg={6}>
                    <div className='image-border'>
                        <img  src={AboutImage} alt="about_image" className='img-fluid about-img' />
                    </div>
                </Col>
                <Col lg={6}>
                    <Heading text="About Me" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nibh a, orci malesuada natoque. Ornare amet, tincidunt sollicitudin id ornare. Commodo in sed orci, volutpat sed. Velit posuere at suspendisse adipiscing. Varius fringilla adipiscing 
                    </p>
                    
                    <Tabs id="about-me-tabs"
                        defaultActiveKey="skills"
                    >
                        <Tab eventKey="skills" title="Skills">
                            <Skills skill="UI/UX Design" percentage={90} />
                            <Skills skill="Graphics Design" percentage={85} />
                            <Skills skill="Web Design" percentage={80} />
                            <Skills skill="Web Development" percentage={80} />
                        </Tab>
                        <Tab eventKey="certificate" title="Certificate">
                            <Certificate />
                        </Tab>
                        <Tab eventKey="experience" title="Experience">
                            <Timeline start='2019' end='Running' title='Envato Elements' degree='Exclusive Author' />
                            <Timeline start='2015' end='2019' title='Avo Corporation' degree='Content Manager' />
                            <Timeline start='2012' end='2015' title='FC Barcelona' degree='Soccer Player' />
                        </Tab>
                        <Tab eventKey="education" title="Education">
                            <Timeline start='2014' end='2016' title='Oxford University' degree='Master Degree' />
                            <Timeline start='2010' end='2014' title='Texas Univercity' degree='Bachelor Degree' />
                            <Timeline start='2008' end='2010' title='Dhaka Collage' degree='Associate Degree' />
                        </Tab>
                    </Tabs>

                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default About