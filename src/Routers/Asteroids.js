import 
React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getAsteroid } from '../service/api'

import { defaultDay } from '../service/utiles'

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
		super(props)
		this.state = {
			date: defaultDay(),
			dataPerDate: null
		}
		this.updateDatesRange = this.updateDatesRange.bind(this)
	}

	updateDatesRange( date ) {
		getAsteroid(date, date)
			.then( response => {
				const { near_earth_objects } = response.data
				this.setState({
					date,
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
		
		const { dataPerDate } = this.state
		if (dataPerDate) {
			length = dataPerDate.length
			const title=`On the day you selected orbited ${length} Asteroids`		
		}
		console.log(this.state.date)
		console.log(defaultDay())
		console.log(this.state.date === defaultDay())
		const title = this.state.date === defaultDay() ? `Today there are ${length} asteroids orbiting the Earth` : `On the day you selected orbited ${length} asteroids the Earth `

		
		return (
			<div className="Asteroids">
				<form >
					<input className="form-control" value={this.state.value} type="date" onChange={this.handleChange} id="example-date-input"/>
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