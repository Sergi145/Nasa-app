import React, { Component } from 'react'
import { getIdAsteroid } from '../service/api'
import { Thumbnail } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class InfoAsteroid extends Component {
	constructor(props) {
		console.log(props)
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
				console.log(data.close_approach_data)
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
		const label = this.state.is_potentially_hazardous ? 'Este meteorito es potencialmente peligroso!! 💀' : 'Tranquilos este meteorito es inofensivo 😅'
		return (
			<div>
				<h3>{this.state.name}</h3>
				<Thumbnail src='http://cadenaser00.epimg.net/ser/imagenes/2017/04/05/ciencia/1491388366_395854_1491388813_noticia_normal.jpg' >
					<p>{`El tamaño estimado de este Asteroide va desde ${this.state.estimated_diameter_min} Km, hasta los ${this.state.estimated_diameter_max} Km`}</p>
					<p>{`Viaja a una velocidad de ${this.state.velocity} Km/seg`}</p>
					<p>{`La fecha que más cerca estuvo de la Tierra fue ${this.state.approach} y pasó a ${this.state.distance_min} Km`}</p>
					<p>{`El cuerpo celeste sobre el que orbita es: ${this.state.orbiting_body}`}</p>
					<p>{label}</p>
					<Link to='/asteroid'>Back</Link>
				</Thumbnail>
				
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