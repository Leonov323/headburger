import { Container } from 'react-bootstrap';
import Burger from '../../Header/logo.png';
import { PrimaryStyled, Rotate } from './Primary.styled';
import React, { Component } from 'react';

const text = [<Container className="col-3">
    <p>Content</p>
    <p>Content</p>
    <p>Content</p>
    <p>Content</p>
</Container>]

const content = [<Container className="row mx-auto">
    {text}
    <Container className="col-3">
        {text}
    </Container>
    {text}
</Container>]


class Main extends Component {
    render() {
        return (
            <PrimaryStyled>
                <Container className="col text-center">
                    {content}
                    <Container className="row mx-auto">
                        <img className="col-6 mx-auto" src={Burger} alt="burger" />
                    </Container>
                    {content}
                    {content}
                    <Rotate>
                        <Container className="cylon_eye row mx-auto">
                            <img className="col-6 mx-auto" src={Burger} alt="burger" />
                        </Container>
                    </Rotate>
                    {content}
                    {content}
                </Container>
            </PrimaryStyled>
        );
    }
}

export default Main;