import { Container, Form, Col } from "react-bootstrap";

function SignIn() {

    return (
    <Container className="mt-5">
        <Form className="col-md-4 mx-auto">
            <Form.Group as={Col} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label>
                    Email
                </Form.Label>
                <Col md="12">
                    <Form.Control placeholder="email@example.com" />
                </Col>
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label>
                    Password
                </Form.Label>
                <Col md="12">
                    <Form.Control type="password" placeholder="Password" />
                </Col>
            </Form.Group>
        </Form>
    </Container>
    );
}

export default SignIn;