import React from 'react';
import {
  BrowserRouter, // Use BrowserRouter directly
  Routes, // Import Routes instead of Switch
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import LoginForm from './LoginForm';
import Homepage from './Homepage';


function App() {
  return (
    <BrowserRouter> {/* Use BrowserRouter here */}
     <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Gym-App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#displayAll">Display All</Nav.Link>
                            <Nav.Link href="#register">Register</Nav.Link>
                            <Nav.Link href="#classes">Classes</Nav.Link>
                            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
      <div>
        <Routes> {/* Replace Switch with Routes */}
          <Route path="/homepage" element={<Homepage />} /> {/* Update Route structure */}
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
