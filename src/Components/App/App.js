import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import { LandingPage } from '../LandingPage/LandingPage'
import Selection from '../Selection/Selection'

const App = () => {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route exact path='/' component={LandingPage} />
					<Route exact path='/selection' component={Selection} />
				</Switch>
			</div>
		</Router>
	)
}

export default App
