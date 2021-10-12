import React, { Component } from 'react'
import { Navbar, Container, Nav, Image } from 'react-bootstrap'
import '../styles.css'
export class Navbarcomponent extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="/"><Image className="logoimg" src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo" /></Navbar.Brand>
                        <Nav className="ml-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="#features">SHOP</Nav.Link>
                            <Nav.Link href="#pricing">PICNIC</Nav.Link>
                            <Nav.Link href="#pricing">PAGE</Nav.Link>
                            <Nav.Link href="#pricing">PROMOTION</Nav.Link>
                            <Nav.Link href="#pricing">BLOG</Nav.Link>
                            <Nav.Link href="/contactus">CONTACT US</Nav.Link>
                        </Nav>
                        <Navbar className="ml-auto "> 
                                <Nav>
                            <Nav.Link className="mr-4">
                                <i className="fa fa-search" aria-hidden="true"></i></Nav.Link>
                            <Nav.Link className="mr-4">
                                <i className="fas fa-shopping-cart"></i></Nav.Link>
                            <Nav.Link className="mr-4">
                                <i className="fa fa-bars" aria-hidden="true"></i></Nav.Link>
                                </Nav>
                        </Navbar>
                        </Container>
                        </Navbar>
                    
            </div>
        )
    }
}

export default Navbarcomponent
