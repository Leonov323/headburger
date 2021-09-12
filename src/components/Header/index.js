import { HeadPanelStyled, OpacityHover, HeaderSpace } from "./HeadPanel.styled";
import { Navbar, Nav, Container } from 'react-bootstrap'
import Logo from './logo.png';
import React, { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { NavLink, Link } from 'react-router-dom';

function HeadPanel() {
    const [isOpen, setOpen] = useState(false);
    isOpen ? disableBodyScroll(document) : enableBodyScroll(document);
    isOpen ? console.log('Panel open') : console.log('Panel close');
    const headerRedirect = (route) => () => {
        setOpen(false);
    };


    return (
        <Container>
        <HeaderSpace />
        <Navbar fixed="top" bg="dark" variant="dark" className="py-0 vw-100">      
            <Container fluid className="bg-dark">
                <OpacityHover>
                    <Link onClick={headerRedirect('/')} to="/">
                        <Navbar.Brand>
                            <img src={Logo} height="40" alt="burger" />
                            {' '}
                            HEADBURGER
                        </Navbar.Brand>
                    </Link>
                </OpacityHover>
                <OpacityHover>
                    <Nav.Item>
                        <Hamburger label="Show menu" color="#F0FFFF" toggled={isOpen} toggle={setOpen} hideOutline={false} />
                    </Nav.Item>
                </OpacityHover>
            </Container>
            <HeadPanelStyled isOpen={isOpen}>
                <Container className="col">
                    <Link onClick={headerRedirect('/sign-in')} className="btn btn-success mb-5 mt-5" to="/sign-in"><h3>Sign in</h3></Link>
                    <Link onClick={headerRedirect('/sign-up')} className="btn btn-primary mb-5" to="/sign-up"><h3>Sign up</h3></Link>
                    <Link className="btn btn-info mb-5" to="/contacts"><h3>Contacts</h3></Link>
                    <Link className="btn btn-warning" to="/blog"><h3>Blog</h3></Link>
                </Container>
            </HeadPanelStyled>
        </Navbar>
        </Container>
    );
}

export default HeadPanel;

