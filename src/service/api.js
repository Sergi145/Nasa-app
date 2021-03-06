
// APIKEY = reR7Xu4UezP8ZOXz1zsjhdh6Cn5aJwxulUyRh13S

// url fotos Hubble
// https://api.nasa.gov/planetary/apod?date=2017-09-15&api_key=reR7Xu4UezP8ZOXz1zsjhdh6Cn5aJwxulUyRh13S

// url asteroides
// https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY

// url fotos Rover Curiosity
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=DEMO_KEY

import axios from 'axios'
const apiKey = 'HZNnxIttpPnbWRKIZ8gSLh2SoymbptTZPjdLtGtT'

export const getImageHubble = (query) => {
	const urlHubble = `https://api.nasa.gov/planetary/apod?date=${query}&api_key=${apiKey}`
	return axios.get(urlHubble)
		.then((data => data.data ) )
		
}


export const getAsteroid = (date) => {
	const urlAsteroid = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${apiKey}`
	return axios.get(urlAsteroid).then((data)=>{
		return data
	})
}

export const getIdAsteroid=(idAsteroid) => {
	const urlGetId=`https://api.nasa.gov/neo/rest/v1/neo/${idAsteroid}?api_key=${apiKey}`
	return axios.get(urlGetId)
		.then(data => data.data )		
}

export const getCuriosity = () => {
	const urlCuriosity = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=${apiKey}`
	return axios.get(urlCuriosity)
		.then(data => data.data)		
}

