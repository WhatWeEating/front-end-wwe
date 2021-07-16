import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import { LandingPage } from '../LandingPage/LandingPage'
import './App.css'
import Selection from '../Selection/Selection'
import Winner from '../Winner/Winner'
import Form from '../Form/Form'

const App = () => {
  const [restaurantsData, setData] = useState([])
  const [restaurantSelections, setRestaurantSelections] = useState([])

  const storeData = async (data) => {
    setData(data)
  }

  const storeSelections = (selections) => {
    setRestaurantSelections(selections)
  }

	return (
		<Router>
			<div className='App'>
				<Switch>
          <Route exact path='/' 
            render={() => (
              <LandingPage
              storeData={storeData} 
              /> 
            )}/>
          <Route exact path='/selection' 
            render={() => (
              <>
              {restaurantsData.length > 0 && 
                <Selection
                restaurantsData={restaurantsData}
                storeSelections={storeSelections} 
                /> 
              }
            </>
          )}/>
          <Route exact path='/voting' 
            render={() => (
              <>
              {restaurantSelections.length > 0 && 
                <Form 
                  restaurantSelections={restaurantSelections}
                />
              }
              </>
            )}/>
          <Route exact path='/winner' component={Winner} />
				</Switch>
			</div>
		</Router>
	)
}

export default App
