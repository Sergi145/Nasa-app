import React from 'react'
import { Grid, Row, Col,  Thumbnail }  from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'

import '../styles/Home.css'



const Home = () => {
	return (
		<div>
			<section className="caracteristicas">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h3 className="titulo">Información del proyecto front-end</h3>
						</div>
					</div>
				</div>
			</section>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<ul className="timeline">
							<li>
								<div className="timeline-image">
									<img className="img-circle img-responsive" src="https://www.definicionabc.com/wp-content/uploads/biosfera-250x250.jpg" alt />
								</div>
								<div className="timeline-panel">
									<div className="timeline-heading">
										<h4>Step One</h4>
										<h4 className="subheading">Subtitle</h4>
									</div>
									<div className="timeline-body">
										<p className="text-muted">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</p>
									</div>
								</div>
								<div className="line" />
							</li>
							<li className="timeline-inverted">
								<div className="timeline-image">
									<img className="img-circle img-responsive" src="https://bdn-data.s3.amazonaws.com/uploads/2015/09/super-blood-moon-250x250.jpg?ref=relatedBox" alt />
								</div>
								<div className="timeline-panel">
									<div className="timeline-heading">
										<h4>Step Two</h4>
										<h4 className="subheading">Subtitle</h4>
									</div>
									<div className="timeline-body">
										<p className="text-muted">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</p>
									</div>
								</div>
								<div className="line" />
							</li>
							<li>
								<div className="timeline-image">
									<img className="img-circle img-responsive" src="http://www.solociencia.com/astronomia/11081202.jpg" alt />
								</div>
								<div className="timeline-panel">
									<div className="timeline-heading">
										<h4>Step Three</h4>
										<h4 className="subheading">Subtitle</h4>
									</div>
									<div className="timeline-body">
										<p className="text-muted">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</p>
									</div>
								</div>
								<div className="line" />
							</li>
							<li className="timeline-inverted">
								<div className="timeline-image">
									<img className="img-circle img-responsive" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Pluto_by_LORRI_and_Ralph%2C_13_July_2015.jpg/250px-Pluto_by_LORRI_and_Ralph%2C_13_July_2015.jpg?w=240" alt />
								</div>
								<div className="timeline-panel">
									<div className="timeline-heading">
										<h4>Step Three</h4>
										<h4 className="subheading">Subtitle</h4>
									</div>
									<div className="timeline-body">
										<p className="text-muted">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</p>
									</div>
								</div>
								<div className="line" />
							</li>
							<li>
								<div className="timeline-image">
									<img className="img-circle img-responsive" src="http://www.thewhitegoddess.co.uk/the_elements/the_planets/images/saturn.jpg" alt />
								</div>
								<div className="timeline-panel">
									<div className="timeline-heading">
										<h4>Bonus Step</h4>
										<h4 className="subheading">Subtitle</h4>
									</div>
									<div className="timeline-body">
										<p className="text-muted">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</p>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}


export default Home 