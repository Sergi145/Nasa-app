import React, { Component } from 'react'
import { getImageHubble } from '../service/api'
import { Grid, Row, Col, Thumbnail }  from 'react-bootstrap'

class WallPaper extends Component {
	constructor (props) {
		super(props)
		this.state = {
			wallpapers: []
		}
	}

	componentDidMount () {
		let promises = []
		for(let i=1;i<30;i++){
			promises.push(getImageHubble(`2017-09-${i}`))
		}

		Promise.all(promises)
			.then(data =>{
				console.log(data)
				this.setState({
					wallpapers: data.map(data => {
						return ({
							title: data.title,
							hdurl: data.hdurl
						})
					})
				})	
			})
	}

	render () {
		return (
			<Grid>
				<Row>
					{
						this.state.wallpapers.length &&
						this.state.wallpapers.map((wallpaper, i)  => {
							 if (wallpaper.hdurl)
							 	return (
									<Col xs={12} sm={6} md={3} key={i}>
										<a href={wallpaper.hdurl}>
											<Thumbnail
												src={wallpaper.hdurl} 
												key={i} 
											>
												<h5>{wallpaper.title}</h5>
											</Thumbnail>
										</a>
									</Col>
								)
						})
					}
				</Row>
			</Grid>
		)
	}

} 



export default WallPaper