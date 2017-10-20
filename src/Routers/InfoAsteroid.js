import React, { Component } from 'react'
import { getIdAsteroid } from '../service/api'
import { Thumbnail } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

class InfoAsteroid extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name:'',
			estimated_diameter_min:'',
			is_potentially_hazardous:'',
			estimated_diameter_max:'',
			velocity: '',
			approach: '',
			distance_min: ''		
		}
		this.upIdAsteroid = this.upIdAsteroid.bind(this)
	}
	upIdAsteroid (idAsteroid){
		getIdAsteroid(idAsteroid)
			.then ((data) => {
				
				 this.setState({
					 name: data.name,
					 estimated_diameter_min: data.estimated_diameter.kilometers.estimated_diameter_min,
					 is_potentially_hazardous: data.is_potentially_hazardous_asteroid,
					 estimated_diameter_max: data.estimated_diameter.kilometers.estimated_diameter_max,
					 velocity: data.close_approach_data[0].relative_velocity.kilometers_per_second,
					 approach: data.close_approach_data[0].close_approach_date,
					 distance_min: data.close_approach_data[0].miss_distance.kilometers,
					 orbiting_body: data.close_approach_data[0].orbiting_body
				 })
			})			
	}

	componentDidMount(){
		let idAsteroid = this.props.match.params.idAsteroid
		this.upIdAsteroid(idAsteroid)
	}
	render() {
		const label = this.state.is_potentially_hazardous ? 'This meteorite is potentially dangerous!! 💀' : 'Calm this meteorite is harmless 😅'
		return (
			<div className="container">
		
					
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            		<div className="box">
                	<div className="box-icon">
                    	<span className="fa fa-4x fa-css3"></span>
                </div>
                <div className="info">
                    <h4 className="text-center">{this.state.name}</h4>
                  	<p>{`The estimated size of this Asteroid ranges from ${this.state.estimated_diameter_min} Km, until the ${this.state.estimated_diameter_max} Km`}</p>
					<p>{`Travel at a speed of ${this.state.velocity} Km/seg`}</p>
					<p>{`The closest date to Earth was ${this.state.approach}and happened to ${this.state.distance_min} Km`}</p>
					<p>{`The celestial body on which orbit is: ${this.state.orbiting_body}`}</p>
					<p>{label}</p>
					<Link to='/asteroid'  className="btn">Back</Link>

                	</div>
            	</div>
        	</div>
				
				
			</div>


		




			// <div>
			// 	<h3>{this.state.name}</h3>
			// 	<p>{`el tamaño estimado de este Asteroide va desde ${this.state.estimated_diameter_min} hasta ${this.state.estimated_diameter_max} Km`}</p>
			// 	<img src={this.state.image} alt=""/>
			// </div>
		)
	}

}

export default InfoAsteroid