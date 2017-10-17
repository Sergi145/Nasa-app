import React from 'react'
import PropTypes from 'prop-types'
import { Thumbnail } from 'react-bootstrap'

const DetailsImage = props => {
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
DetailsImage.defaultProps = {
	pictures: {
		title: 'Image not found',
		hdurl: 'http://via.placeholder.com/720x430?text=Image+Not+Found'
	}
}
DetailsImage.propTypes = {
	pictures: PropTypes.shape({
		title: PropTypes.string,
		date: PropTypes.string,
		explanation: PropTypes.string,
		hdurl: PropTypes.string
	})
}

export default DetailsImage
