import React from 'react'
import imgSrc from '../Img/nasalogo.png'

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
					<img src={imgSrc} className="img-rounded" alt="Cinque Terre" />
				</div>
				<div className="collapse navbar-collapse" id="navbar1">
					<ul className="nav navbar-nav">
						<li><a href="#">Home</a></li>
						<li><a href="#">Images Hubble</a></li>
						<li><a href="#">Asteroid</a></li>
						<li><a href="#">Images Curiosity</a></li>
						<li><a href="#">Wallpapers</a></li>
					</ul>
				</div>
			</div>
		</nav>
	</header> 
)
export default Header