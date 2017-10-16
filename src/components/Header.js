import React from 'react'
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, Navbar }  from 'react-bootstrap';

import '../styles/Header.css'

const Header = () => (
	<Navbar inverse collapseOnSelect id="navbar">
		<Navbar.Header>
			<LinkContainer to='/'>
				<Navbar.Brand>Home</Navbar.Brand>
			</LinkContainer>
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav>
				<LinkContainer to='/image'>
					<NavItem eventKey={1}>Images Hubble</NavItem>
				</LinkContainer>
				<LinkContainer to='/asteroid'>
					<NavItem eventKey={2}>Asteroid</NavItem>
				</LinkContainer>
				<LinkContainer to='/curiosity'>
					<NavItem eventKey={2} href="#">Images Curiosity</NavItem>
				</LinkContainer>
				<LinkContainer to='/wallpaper'>
					<NavItem eventKey={2} href="#">Wallpapers</NavItem>
				</LinkContainer>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)
export default Header