import { Container, Form, Col, Row } from "react-bootstrap";

function SignUp() {

    return (
    <Container className="vh-100">
        <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Email
                </Form.Label>
                <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue="email@example.com" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    Password
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="password" placeholder="Password" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    Repeat password
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="password" placeholder="Repeat password" />
                </Col>
            </Form.Group>
        </Form>
    </Container>
    );
}

export default SignUp;