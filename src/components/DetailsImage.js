import React from 'react'
import { Thumbnail } from 'react-bootstrap'

const DetailsImage = props => {
	console.log(props)
	return (
		<div>
			<h3>{props.pictures.title}</h3>
			<Thumbnail src={props.pictures.hdurl} >

				<h4>{props.pictures.date}</h4>
				<p>{props.pictures.explanation}</p>
			</Thumbnail>
		</div>
	)
}
  




export default DetailsImage
