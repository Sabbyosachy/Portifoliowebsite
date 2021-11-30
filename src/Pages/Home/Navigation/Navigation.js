import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css'

const Navigation = () => {
    return (
        <div>
            <Navbar fixed="top" className="navs1" expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">SABBYOSACHY</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav className="ms-auto">
      <NavLink className="navs"  to="/">Home</NavLink>
      <HashLink className="navs" smooth to="/#about">About</HashLink>
      <HashLink className="navs" smooth to="/#skill">Skills</HashLink>
      <HashLink className="navs" smooth to="/#projects">Projects</HashLink>
      <HashLink className="navs" smooth to="/#servises">Services</HashLink>
      <Link className="navs" smooth to="/details">Details</Link>
      <Link className="navs" to="/blogs">Blogs</Link>
      <HashLink className="navs" to="/#contact">Contact</HashLink>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
    );
};

export default Navigation;