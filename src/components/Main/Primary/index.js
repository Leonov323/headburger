import { Container, Row, Col } from 'react-bootstrap';
import Burger from '../../Header/logo.png';
import { PrimaryStyled, Rotate } from './Primary.styled';
import React, { Component } from 'react';

const text = [
    <Container fluid className="text-center p-0">
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
    </Container>
]

const text2 = [
    <Container fluid className="text-center p-0">
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
    </Container>
]

const content = [
    <Container fluid>
        {text}
        {text}
        {text}
    </Container>
]


class Main extends Component {
    render() {
        return (
            <PrimaryStyled>
                <Container fluid>
                    <Row>
                        <Col xs={4}>{text}</Col>
                        <Col xs={4}>{text2}</Col>
                        <Col xs={4}>{text}</Col>
                    </Row>
                    <Row>
                        <Col xs={4}>{text}</Col>
                        <Col xs={4}></Col>
                        <Col xs={4}>{text}</Col>
                    </Row>
                    <Row>
                        <Col xs={4}>{text}</Col>
                        <Col xs={4}>{text2}</Col>
                        <Col xs={4}>{text}</Col>
                    </Row>
                    <Row>
                        <Col xs={4}>{text}</Col>
                        <Col xs={4}></Col>
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

export default Main;


{/* <Container fluid className="row mx-auto">
                        
                        <img className="col-md-4 mx-auto" src={Burger} alt="burger" />
                        
                    </Container>


<Rotate>
<Container className="row mx-auto">
    <img className="col-2 mx-auto" src={Burger} alt="burger" />
</Container>
</Rotate> */}