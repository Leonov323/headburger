import { Container, Col, Row } from "react-bootstrap";

function Contacts() {

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col xs lg="2">

                </Col>
                <Col md="auto">
                    <Container>
                        <a className="btn btn-primary p-5" href="https://github.com/Leonov323" target="_blank">github.com/Leonov323</a>
                    </Container>
                </Col>
                <Col xs lg="2">

                </Col>
            </Row>
        </Container>
    );
}

export default Contacts;