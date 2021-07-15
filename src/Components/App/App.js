import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import { LandingPage } from '../LandingPage/LandingPage'
import './App.css'
import Selection from '../Selection/Selection'
import Winner from '../Winner/Winner'

const App = () => {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route exact path='/' component={LandingPage} />
					<Route exact path='/selection' component={Selection} />
          <Route exact path='/winner' component={Winner} />
				</Switch>
			</div>
		</Router>
	)
}

export default App
