import React from 'react'
import { Switch, Route } from 'react-router-dom'


import Home from '../Routers/Home'
import ImageHubble from '../Routers/ImageHubble'
import Asteroids from '../Routers/Asteroids'
import Curiosity from '../Routers/Curiosity'
import SearchWallPaper from '../Routers/SearchWallPaper'



const Main = () => (
	<div className="Main">
		<Switch>
			<Route exact path='/' component={Home}/>
			<Route  path='/image' component={ImageHubble}/>
			<Route  path='/asteroid' component={Asteroids}/>
			<Route  path='/curiosity' component={Curiosity}/>
			<Route  path='/wallpaper' component={SearchWallPaper}/>
		</Switch>  

	</div>
)
export default Main

