import React, { Component } from 'react'
import { getImageHubble } from '../service/api'
import { Grid, Row, Col }  from 'react-bootstrap'
import DetailsImage from '../components/DetailsImage'


class ImageHubble extends Component {
	constructor (props){
		console.log(props)
		super(props)
		this.state =  {
			date: '',
			explanation: '',
			hdurl: '',
			title: ''
		}
	
		this.updateData = this.updateData.bind(this)
	}
	
	updateData( dateSelected ) {
		getImageHubble(  dateSelected )
			.then(data => {
				this.setState({
					date: data.date, 
					explanation: data.explanation,
					hdurl:data.hdurl,
					title: data.title
				})	
			})		
	}

	componentDidMount () {
		this.updateData('')
	}
	
	handleChange = (e) => {
		const newDate = e.target.value
		this.updateData(newDate)
	}
	
	render () {

		return(
			<Grid>
				<Row>
					<Col xs={12} sm={12} md={12}>
						<div className="form-group row">
							<label htmlFor="example-date-input" className="col-2 col-form-label">Date</label>
							<div className="col-10">
								<form >
								<input className="form-control" type="date" onChange={this.handleChange} id="example-date-input"/>
								</form>
							</div>
						</div>
					</Col>
					<Col xs={12} sm={12} md={12} >
					<DetailsImage pictures={this.state}/>
					</Col>
				</Row>
			</Grid>
		)
	}

}

export default ImageHubble