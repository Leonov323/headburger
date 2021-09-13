import { Container, Col, Row } from "react-bootstrap";
import { Rotate } from '../Main/Main.styled'
import React, {Component} from 'react';


function Bloger() {
    const bloger = [<Col xs={4} md={2}><Rotate><h2>BLOG</h2></Rotate></Col>,
                    <Col xs={4} md={2}><Rotate><h2>BLOG</h2></Rotate></Col>,
                    <Col xs={4} md={2}><Rotate><h2>BLOG</h2></Rotate></Col>]
    let result = [].concat(...Array(20).fill(bloger))

    return result;
}
class SignIn extends Component {      
    render() {
    return (
        <Container className="mt-2 text-center">
            <Row>
                {Bloger()}
            </Row>       
        </Container>
    );
}
}

export default SignIn;