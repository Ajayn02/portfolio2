import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <Navbar expand="lg" className=" py-3 shadow" style={{backgroundColor:""}}>
                <Container>
                    <Navbar.Brand href="#home" style={{fontWeight:"bold",fontSize:"25px"}}>PortFolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto" style={{fontWeight:"bold"}}>
                            <Nav.Link href="#home">
                                <Link to={"/"} style={{textDecoration:"none",color:"black"}}>Home</Link>
                            </Nav.Link>
                            {/* <Nav.Link href="#link">
                                <a style={{textDecoration:"none",color:"black"}} href='#abt'>About</a>
                            </Nav.Link> */}
                            <Nav.Link href="#link">
                                <Link to={'/projects'} style={{textDecoration:"none",color:"black"}}>Projects</Link>
                            </Nav.Link>
                            <Nav.Link href="#link">
                               <Link to={'/con'} style={{textDecoration:"none",color:"black"}}> Contact</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header