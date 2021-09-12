import { HeadPanelStyled, OpacityHover, HeaderStyled } from "./HeadPanel.styled";
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import Logo from './logo.png';
import React, { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';


function HeadPanel() {
    const [isOpen, setOpen] = useState(false);
    isOpen ? disableBodyScroll(document) : enableBodyScroll(document)
    return (
        <Container fluid>
            <HeaderStyled>
                <Navbar className="row py-4" bg="dark" variant="dark">
                    <Container fluid className="z-index-2 position-fixed">
                        <Navbar.Brand href="#">
                            <OpacityHover className="d-flex">
                                <img src={Logo} height="40px" alt="burger" />
                                <h2>HEADBURGER</h2>
                            </OpacityHover>
                        </Navbar.Brand>
                        <Nav.Item>
                            <OpacityHover>
                                <Hamburger
                                    label="Show menu"
                                    color="#F0FFFF"
                                    toggled={isOpen}
                                    toggle={setOpen}
                                    hideOutline={false}
                                />
                            </OpacityHover>
                        </Nav.Item>
                    </Container>
                </Navbar>
            </HeaderStyled>
            <HeadPanelStyled isOpen={isOpen}>
                <Container className="col">
                    <Button variant="success mb-5 mt-5"><h3>Sign in</h3></Button>
                    <Button variant="primary mb-5"><h3>Sign up</h3></Button>
                    <Button variant="info mb-5"><h3>Contacts</h3></Button>
                    <Button variant="warning"><h3>Blog</h3></Button>
                </Container>
            </HeadPanelStyled>
        </Container>
    );
}

export default HeadPanel;
