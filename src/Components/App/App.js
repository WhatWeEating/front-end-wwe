import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import { LandingPage } from '../LandingPage/LandingPage'
import './App.css'
import Selection from '../Selection/Selection'
import Winner from '../Winner/Winner'
import Form from '../Form/Form'
import { postRestaurantsData } from '../../apiCalls'

const App = () => {
  const [restaurantsData, setData] = useState([])
  const [restaurantSelections, setRestaurantSelections] = useState([])
  const [eventId, setEventId] = useState('')

  const storeData = async (data, eId) => {
    setData(data)
    setEventId(eId)
  }

  const storeSelections = (selections) => {
    setRestaurantSelections(selections)
    console.log(selections);
    postRestaurantsData(selections, eventId)

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
                eventId={eventId}
                /> 
              }
            </>
          )}/>
          <Route exact path='/voting/:id'
            render={({match}) => (
              <>
              {console.log(match.params.id)}
              {restaurantSelections.length > 0 && 
                <Form 
                  restaurantSelections={restaurantSelections}
                />
              }
              </>
            )}/>
          <Route exact path='/winner'  
            render={() => (
              <>
              {restaurantSelections.length > 0 && 
                <Winner
                restaurantSelections={restaurantSelections}
                />
              }
              </>
            )}/>
				</Switch>
			</div>
		</Router>
	)
}

export default App
