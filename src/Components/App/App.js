import React from 'react'
import { Switch, Route } from 'react-router-dom'

const App = () => {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={LandingPage} />
			</Switch>
		</div>
	)
}

export default App
