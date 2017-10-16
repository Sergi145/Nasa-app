import React from 'react'
import { Grid, Row, Col,  Thumbnail }  from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'


import '../styles/Home.css'


const Home = () => {
	return (
		<Grid>
			<Row>
				<Col xs={12} sm={12} md={12}>
					<div className="container_carrusel">
						<div id="carousel">
							<figure><img src="http://lorempixel.com/186/116/nature/1" alt /></figure>
							<figure><img src="http://lorempixel.com/186/116/nature/2" alt /></figure>
							<figure><img src="http://lorempixel.com/186/116/nature/3" alt /></figure>
							<figure><img src="http://lorempixel.com/186/116/nature/4" alt /></figure>
							<figure><img src="http://lorempixel.com/186/116/nature/5" alt /></figure>
							<figure><img src="http://lorempixel.com/186/116/nature/6" alt /></figure>
							<figure><img src="http://lorempixel.com/186/116/nature/7" alt /></figure>
							<figure><img src="http://lorempixel.com/186/116/nature/8" alt /></figure>
							<figure><img src="http://lorempixel.com/186/116/people/9" alt /></figure>
						</div>
					</div>
				</Col>
				<Col xs={12} sm={12} md={12}>
					<div className="description">
						<h3>DESCRIPTION</h3>
						<p>fjdsflkadsjfalkdsfhdhfdñlfdkjhdklfhsfslFHSDKLFHDFKGHEÑSDLKFHDKHSKFNKDJHDSKLFHDSKJFHSDKJFHDSKJFHSDKLFHFJHF</p>
					</div>
				</Col>
			</Row>
		</Grid>
	)
}

export default Home 