import { HeadPanelStyled, OpacityHover } from "./HeadPanel.styled";
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import Logo from './logo.png';
import React, { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

function HeadPanel() {
    const [isOpen, setOpen] = useState(false);
    isOpen ? disableBodyScroll(document) : enableBodyScroll(document);
    isOpen ? console.log('Panel open') : console.log('Panel close');
    


    return (
        <Navbar fixed="top" bg="dark" variant="dark" className="py-0 vw-100">
            <Container fluid className="bg-dark">
                <OpacityHover>
                    <Navbar.Brand href="#">
                        <img src={Logo} height="40" alt="burger" />
                        {' '}
                        HEADBURGER
                    </Navbar.Brand>
                </OpacityHover>
                <OpacityHover>
                    <Nav.Item>
                        <Hamburger label="Show menu" color="#F0FFFF" toggled={isOpen} toggle={setOpen} hideOutline={false} />
                    </Nav.Item>
                </OpacityHover>
            </Container>
            <HeadPanelStyled isOpen={isOpen}>
                <Container className="col">
                    <Button variant="success mb-5 mt-5"><h3>Sign in</h3></Button>
                    <Button variant="primary mb-5"><h3>Sign up</h3></Button>
                    <Button variant="info mb-5"><h3>Contacts</h3></Button>
                    <Button variant="warning"><h3>Blog</h3></Button>
                </Container>
            </HeadPanelStyled>
        </Navbar>
    );
}

export default HeadPanel;

