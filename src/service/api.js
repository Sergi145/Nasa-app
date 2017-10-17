
// APIKEY = reR7Xu4UezP8ZOXz1zsjhdh6Cn5aJwxulUyRh13S

// url fotos Hubble
// https://api.nasa.gov/planetary/apod?date=2017-09-15&api_key=reR7Xu4UezP8ZOXz1zsjhdh6Cn5aJwxulUyRh13S

// url asteroides
// https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY

// url fotos Rover Curiosity
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY

import axios from 'axios'
const apiKey = 'reR7Xu4UezP8ZOXz1zsjhdh6Cn5aJwxulUyRh13S'

export const getImageHubble = (query) => {
  console.log('query =>' + query,'aaaaaaaaaaa')
	const urlHubble = `https://api.nasa.gov/planetary/apod?date=${query}&api_key=${apiKey}`
	// const urlFotoHubble = 'https://api.nasa.gov/planetary/apod?date=2017-09-15&api_key=reR7Xu4UezP8ZOXz1zsjhdh6Cn5aJwxulUyRh13S'
	return axios.get(urlHubble)
		.then((data => data.data ) )
}

