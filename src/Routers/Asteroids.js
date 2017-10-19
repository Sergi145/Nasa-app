import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getAsteroid } from '../service/api'
import '../styles/Home.css'
// import { getIdAsteroid } from '../service/api'

const detailsPerDate = event => {
	const { neo_reference_id, name } = event
	return (

		<li key={ neo_reference_id }>
			<Link id="lista" to={`/getAsteroid/${neo_reference_id}`}>
				{ name }
			</Link>
		</li>

	
	) 
}


class Asteroids extends Component {
	constructor(props) {
		console.log(props)
		super(props)
		this.state = {
			date: '',
			dataPerDate: null
		}
		this.updateDatesRange = this.updateDatesRange.bind(this)
	}

	updateDatesRange( date ) {
		getAsteroid(date, date)
			.then( response => {
				const { near_earth_objects } = response.data
				this.setState({
					dataPerDate: near_earth_objects[date]
				})
			})
	}

	componentDidMount(){
		this.updateDatesRange(this.state.date)
	}

	handleChange = (e) => {
		const newDate = e.target.value
		this.updateDatesRange(newDate)
	}

	render() {
		let length = ''
		let title=''
		const { date, dataPerDate } = this.state

		if (dataPerDate) {
			 length = dataPerDate.length
			title=`En el día que has seleccionado orbitaron ${length} Asteroides`		
		}


		
		return (
			<div className="Asteroids">
				<form >
					<input className="form-control" type="date" onChange={this.handleChange} id="example-date-input"/>
				</form>
				
					<h1>{title}</h1>
				<ul>
			
					{
						dataPerDate && 
						dataPerDate.map( eventData => detailsPerDate(eventData) )
					}
				</ul>
			</div>
		) 
	}
}

export default Asteroids