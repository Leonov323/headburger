import { Container } from 'react-bootstrap';

import Burger from '../../Header/logo.png';
import { StyledMain, Rotate } from './Main.styled';

export const Main = () => {
    return (
        <StyledMain>
            <Container className="col text-center">
                <Container className="row mx-auto">
                    <Container className="col-3">
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                    </Container>
                    <Container className="col-3">
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                    </Container>
                    <Container className="col-3">
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                    </Container>
                </Container>
                <Container className="row mx-auto"><img className="col-6 mx-auto" src={Burger} alt="burger" /></Container>
                <Container className="row mx-auto">
                    <Container className="col-3">
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                    </Container>
                    <Container className="col-3">
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                    </Container>
                    <Container className="col-3">
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                    </Container>
                </Container>
                <Container className="row mx-auto">
                    <Container className="col-3">
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                    </Container>
                    <Container className="col-3">
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                    </Container>
                    <Container className="col-3">
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                    </Container>
                </Container>
                <Rotate>
                    <Container className="cylon_eye row mx-auto"><img className="col-6 mx-auto" src={Burger} alt="burger" /></Container>
                </Rotate>
                <Container className="row mx-auto">
                    <Container className="col-3">
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                    </Container>
                    <Container className="col-3">
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                    </Container>
                    <Container className="col-3">
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                    </Container>
                </Container>
            </Container>
        </StyledMain>
    )

}