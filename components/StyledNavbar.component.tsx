import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import CartIcon from './CartIcon.component'
import Link from 'next/link'

function StyledNavbar() {
    return (
        <Navbar expand="lg" fixed="top" bg="white" style={{ zIndex: 5 }}>
            <Container>
                <Link href="/">
                    <Navbar.Brand as="h1" style={{ cursor: 'default' }}>
                        Passion Fashion
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">
                        <Link href="/">
                            <Nav.Link as="li" style={{ textDecoration: "none", color: "inherit", cursor: 'default' }}>
                                Home
                            </Nav.Link>
                        </Link>

                        <Link href="/about">
                            <Nav.Link as="li" style={{ textDecoration: "none", color: "inherit", cursor: 'default' }}>

                                About
                            </Nav.Link>
                        </Link>

                        <Link href="/contact" >
                            <Nav.Link as="li" style={{ textDecoration: "none", color: "inherit", cursor: 'default' }} >
                                Contact
                            </Nav.Link>
                        </Link>

                        {/* <ShoppingBag onMouseEnter width="30px" height="40px" className="cartIcon" /> */}
                        {/* <Nav.Link as="li" > */}
                        {/* </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
                <CartIcon />


            </Container>
        </Navbar >
    )
}

export default StyledNavbar