import { Container, Row, Col, Image } from 'react-bootstrap';
import Burger from '../../Header/logo.png';
import { PrimaryStyled, Rotate } from './Primary.styled';
import React, { Component } from 'react';
import { Ghost } from '../Contacts/Ghost.styled.js';

const text = [
    <h2>
        <span>H</span>
        <span>E</span>
        <span>A</span>
        <span>D</span>
        <span>E</span>
        <span>R</span>
    </h2>
]

const ghostText = text.map((texts, index) => 
    <Ghost key={index}>
        <Container fluid className="text-center p-0 ghost">
            <Col className="mt-5 mb-5">
                {texts}
                {texts}
                {texts}
            </Col>
        </Container>
    </Ghost>
)

class Primary extends Component {
    render() {
        return (
            <PrimaryStyled>
                <Container fluid>
                    <Row>
                        <Col xs={4} className="m-0 p-0">{ghostText}</Col>
                        <Col xs={4} className="m-0 p-0">{ghostText}</Col>
                        <Col xs={4} className="m-0 p-0">{ghostText}</Col>
                    </Row>
                    <Row>
                        <Col xs={4}>{ghostText}</Col>
                        <Col xs={4} className="align-items-center d-flex p-0 rotate">
                            <Rotate>
                                <Image src={Burger} alt="burger" rounded fluid />
                            </Rotate>
                        </Col>
                        <Col xs={4}>{ghostText}</Col>
                    </Row>
                    <Row>
                        <Col xs={4}>{ghostText}</Col>
                        <Col xs={4}>{ghostText}</Col>
                        <Col xs={4}>{ghostText}</Col>
                    </Row>
                    <Row>
                        <Col xs={4}>{ghostText}</Col>
                        <Col xs={4} className="align-items-center d-flex p-0 rotate">
                            <Rotate>
                                <Image src={Burger} alt="burger" rounded fluid />
                            </Rotate>
                        </Col>
                        <Col xs={4}>{ghostText}</Col>
                    </Row>
                    <Row>
                        <Col xs={4}>{ghostText}</Col>
                        <Col xs={4}>{ghostText}</Col>
                        <Col xs={4}>{ghostText}</Col>
                    </Row>
                </Container>
            </PrimaryStyled>
        );
    }
}

export default Primary;