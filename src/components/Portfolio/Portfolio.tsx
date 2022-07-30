import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Heading, PortfolioItem, PortfolioButton} from '../../components';
import items from './portfolioData';

const allCategories = ['All', ...new Set(items.map(item => item.category))];


const Portfolio = () => {
    const [portfolioItems, setPortfolioItems] = useState(items);
    const [buttons, setButtons] = useState(allCategories);

    const filter = (button) => {
        if(button === 'All'){
            setPortfolioItems(items);
            return;
        }

        const filterData = items.filter(item => item.category === button);
        setPortfolioItems(filterData);
    }

    return (
        <div className="portfolio" id="portfolio">
            <Container>
                <Row>
                    <Col xs={12}>
                        <Heading text="Portfolio" />
                    </Col>
                    <Col xs={12}>
                        <PortfolioButton button={buttons} filter={filter} />
                    </Col>
                    <Col xs={12}>
                        <PortfolioItem portfolioItems={portfolioItems} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio