// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../../SharedPage/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import background from '../../assets/Rectangle1.png'
import './Main.css'


const Main = () => {
    return (
        <div
            
            style={{
                backgroundImage: `url(${background})`,
                backgroundPosition: 'center center',
                backgroundSize: '100% 100%',
                height: '100vh',
                

            }}
        >
            <Header></Header>
            <Container>
                <Row >
                    <Col lg={5}>
                        <h1 className='bg-primary'>col lg 4</h1>
                    </Col>
                    <Col lg={7}>
                        
                        <Outlet></Outlet>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Main;