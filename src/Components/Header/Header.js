import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
	return (
		<Navbar collapseOnSelect expand='md'>
			<Navbar.Brand href='/'>
				<i className='fas fa-mountain'></i> Climb Time!
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' id='hamburger' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='mr-auto'>
					<Nav.Link href='/climbs'>Climb Routes</Nav.Link>
					<NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
						<NavDropdown.Item href='/about'>About Me</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href='/linkedin'>
							LinkedIn
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
