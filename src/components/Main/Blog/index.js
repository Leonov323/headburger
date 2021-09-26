import { Container, Col, Row } from "react-bootstrap";
import { Rotate } from '../Primary/Primary.styled'
import React, { Component } from 'react';


function Bloger() {
    const bloger = [<Col xs={4} className="m-5 mx-auto" md={2}><Rotate><h2>BLOG</h2></Rotate></Col>];
    let multiply = [].concat(...Array(30).fill(bloger))
    const giveKey = multiply.map((blogers, index) => <span key={index}>{blogers}</span>)
    return giveKey;
}

class SignIn extends Component {
    render() {
        return (
            <Container fluid className="mt-2 text-center">
                <Row>
                    <Col>
                        {Bloger()}
                    </Col>
                    <Col>
                        {Bloger()}
                    </Col>
                    <Col>
                        {Bloger()}
                    </Col>
                    <Col>
                        {Bloger()}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default SignIn;