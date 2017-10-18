import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getAsteroid } from '../service/api'
// import { getIdAsteroid } from '../service/api'

const detailsPerDate = event => {
	const { neo_reference_id, name } = event
	return (
		<li key={ neo_reference_id }>
			<Link to={`/asteroid/:${neo_reference_id}`}>
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
			date: '2017-10-14',
			dataPerDate: null
		}
		this.updateDatesRange = this.updateDatesRange.bind(this)
		
	}

	updateDatesRange( date ) {
		getAsteroid(date, date)
			.then( response =>{
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
		console.log("render...")
		const { date, dataPerDate } = this.state
		if (dataPerDate) {
			console.log(dataPerDate)
		}
		
		return (
			<div className="Asteroids">
				<form >
					<input className="form-control" type="date" onChange={this.handleChange} id="example-date-input"/>
				</form>
				<h1>Asteroids</h1>
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