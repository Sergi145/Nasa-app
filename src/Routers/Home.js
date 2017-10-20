import React from 'react'

import '../styles/Home.css'

const Home = () => {
	return (
		<div>
			<section className="caracteristicas">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h3 className="titulo">Front-end project information</h3>
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
									<img className="img-circle img-responsive" src="https://www.definicionabc.com/wp-content/uploads/biosfera-250x250.jpg" alt="" />
								</div>
								<div className="timeline-panel">
									<div className="timeline-heading">
										<h4>Step One</h4>
										<h4 className="subheading">Description</h4>
									</div>
									<div className="timeline-body">
										<p className="text-muted">
										This is a website created by students of Skylab, 
										with the following functionality: access to the API 
										that provides the nasa to get updated images of the 
										missions they perform in space.

										We offer you the access to navigate in extraordinary 
										images to enter in this unknown world and to live wonderful
										experiences ...
										</p>
									</div>
								</div>
								<div className="line" />
							</li>
							<li className="timeline-inverted">
								<div className="timeline-image">
									<img className="img-circle img-responsive" src="https://bdn-data.s3.amazonaws.com/uploads/2015/09/super-blood-moon-250x250.jpg?ref=relatedBox" alt="" />
								</div>
								<div className="timeline-panel">
									<div className="timeline-heading">
										<h4>Step Two</h4>
										<h4 className="subheading">Image Hubble</h4>
									</div>
									<div className="timeline-body">
										<p className="text-muted">
										This section shows the images obtained by the NASA through the Hubble telescope.
										Hubble is a telescope that orbits outside the atmosphere, in circular orbit around 
										the Earth to 593 km above sea level, with an orbital period between 96 and 97 min.
										The images of the galaxies that the Hubble sends are of such clarity that he was able 
										to send extraordinary images of Comet Shoemaker-Levy 9.
										At present, the Hubble resolution duplicates that of the best instrument installed 
										on Earth, and thanks to this, you can clearly see the volume of space a thousand 
										times greater than other telescopes.
										</p>
									</div>
								</div>
								<div className="line" />
							</li>
							<li>
								<div className="timeline-image">
									<img className="img-circle img-responsive" src="http://www.solociencia.com/astronomia/11081202.jpg" alt="" />
								</div>
								<div className="timeline-panel">
									<div className="timeline-heading">
										<h4>Step Three</h4>
										<h4 className="subheading">Asteroids</h4>
									</div>
									<div className="timeline-body">
										<p className="text-muted">
										Every day, Earth is bombarded with more than 100 tons of dust
										and sand-sized particles. About once a year, an automobile-sized 
										asteroid hits Earth's atmosphere, creates an impressive fireball, 
										and burns up before reaching the surface. In this section we will 
										tell you, according to the dates, how close they passed the earth. 
										Find out ....
										</p>
									</div>
								</div>
								<div className="line" />
							</li>
							<li className="timeline-inverted">
								<div className="timeline-image">
									<img className="img-circle img-responsive" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Pluto_by_LORRI_and_Ralph%2C_13_July_2015.jpg/250px-Pluto_by_LORRI_and_Ralph%2C_13_July_2015.jpg?w=240" alt="" />
								</div>
								<div className="timeline-panel">
									<div className="timeline-heading">
										<h4>Step Four</h4>
										<h4 className="subheading">Curiosity</h4>
									</div>
									<div className="timeline-body">
										<p className="text-muted">
										Curiosity is a space mission that includes an astronaut
										of Martian exploration directed by NASA. In the course of 
										his mission he will take dozens of samples of soil and rocky
										Martian dust for analysis. In this section you will 
										find the photos taken by him.
										</p>
									</div>
								</div>
								<div className="line" />
							</li>
							<li>
								<div className="timeline-image">
									<img className="img-circle img-responsive" src="http://www.thewhitegoddess.co.uk/the_elements/the_planets/images/saturn.jpg" alt="" />
								</div>
								<div className="timeline-panel">
									<div className="timeline-heading">
										<h4>Bonus Step</h4>
										<h4 className="subheading">Download</h4>
									</div>
									<div className="timeline-body">
										<p className="text-muted">
										And as a bonus ...
										In this section you will have at your disposal the best 
										images so you can download and use them as wallpaper.
										</p>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}


export default Home 