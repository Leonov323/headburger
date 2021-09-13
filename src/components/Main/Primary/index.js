import { Container, Row, Col, Image } from 'react-bootstrap';
import Burger from '../../Header/logo.png';
import { PrimaryStyled, Rotate } from './Primary.styled';
import React, { Component } from 'react';
import { Ghost }   from '../Contacts/Ghost.styled.js';

const text = [
    <Ghost>
    <Container fluid className="text-center p-0 ghost">
    
    <Col className="m-5">
    <h2>
        <span>H</span>
        <span>E</span>
        <span>A</span>
        <span>D</span>
        <span>E</span>
        <span>R</span>
    </h2>
    
    <h2>
        <span>H</span>
        <span>E</span>
        <span>A</span>
        <span>D</span>
        <span>E</span>
        <span>R</span>
    </h2>
    <h2>
        <span>H</span>
        <span>E</span>
        <span>A</span>
        <span>D</span>
        <span>E</span>
        <span>R</span>
    </h2>
    </Col>
        
    </Container>
    </Ghost>
]

const content = [
    <Container fluid>
        {text}
        {text}
        {text}
    </Container>
]


class Primary extends Component {
    render() {
        return (
            <PrimaryStyled>
                <Container fluid>
                    <Row>
                        <Col xs={4}>{text}</Col>
                        <Col xs={4}>{text}</Col>
                        <Col xs={4}>{text}</Col>
                    </Row>
                    <Row>
                        <Col xs={4}>{text}</Col>
                        <Col xs={4} className="align-items-center d-flex p-0 rotate">
                            <Rotate>
                                <Image src={Burger} alt="burger" rounded fluid />
                            </Rotate>
                        </Col>
                        <Col xs={4}>{text}</Col>
                    </Row>
                    <Row>
                        <Col xs={4}>{text}</Col>
                        <Col xs={4}>{text}</Col>
                        <Col xs={4}>{text}</Col>
                    </Row>
                    <Row>
                        <Col xs={4}>{text}</Col>
                        <Col xs={4} className="align-items-center d-flex p-0 rotate">
                            <Rotate>
                                <Image src={Burger} alt="burger" rounded fluid />
                            </Rotate>
                        </Col>
                        <Col xs={4}>{text}</Col>
                    </Row>
                    <Row>
                        <Col xs={4}>{text}</Col>
                        <Col xs={4}>{text}</Col>
                        <Col xs={4}>{text}</Col>
                    </Row>
                </Container>
            </PrimaryStyled>
        );
    }
}

export default Primary;