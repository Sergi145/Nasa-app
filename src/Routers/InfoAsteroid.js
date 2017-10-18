import React, { Component } from 'react'
import { getIdAsteroid } from '../service/api'

class InfoAsteroid extends Component {
	constructor() {
		super()
		this.state = {
				name:'',
				estimated_diametre:'',
				is_potentially_hazardous:'',
				image:''		
		}
	}
	componentDidMount(){
		console.log(this.params)
	}
	render() {
		return (
			<div>
				<h3>ID Asteroid</h3>
				<p>gldfgñdlg</p>
				<p>lñdfkdsñl</p>
				<img src="http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3407677" alt=""/>
			</div>
		)
	}

}

export default InfoAsteroid