import React from 'react'
import { Link } from 'react-router-dom'


import '../styles/Home.css'

const Header = () => (
	<header>
		<nav className="navbar navbar-static-top navbar-inverse navbar">
			<div className="container">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar1">
						<span className="sr-only">Alternar menu</span>
						<span className="icon-bar" />
						<span className="icon-bar" />
						<span className="icon-bar" />
					</button>
					<img src= {require("../Img/nasalogo.png")} className="img-rounded" alt="Cinque Terre" />
				</div>
				<div className="collapse navbar-collapse" id="navbar1">
					<ul className="nav navbar-nav">
						<li><Link to="/">Home</Link></li>
						<li><Link to="/image">Images Hubble</Link></li>
						<li><Link to="/asteroid">Asteroids</Link></li>
						<li><Link to="/curiosity">Curiosity</Link></li>
						<li><Link to="/wallpaper">Search Wallpaper</Link></li>
					</ul>
				</div>
			</div>
		</nav>
	</header> 
)
export default Header