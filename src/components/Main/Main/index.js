import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import Burger from '../../Header/logo.png'

const StyledMain = styled.div`
    padding-top: 10px;
    min-height: 200vh;
    width: 100%;
    background: gray;
    display: block;

`

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
                <Container className="row mx-auto"><img className="col-lg-6 mx-auto" src={Burger} alt="burger"/></Container>
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
                <Container className="row mx-auto"><img className="col-lg-6 mx-auto" src={Burger} alt="burger"/></Container>
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