import './Selection.css';
import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
import Card from '../Card/Card';

const Selection = ({ restaurantsData, storeSelections }) => {
  const [choices, setChoices] = useState([])

  const toggleChoice = (id) => {
    const currentChoices = Array.from(choices)
    const chosenRestaurant = restaurantsData.find(restaurant => restaurant.id === id)
    const index = choices.findIndex(choice => choice.id === chosenRestaurant.id)
    if(index > -1){
      currentChoices.splice(index, 1)
    } else {
      currentChoices.push(chosenRestaurant)
    }
    setChoices(currentChoices)
  }

  function renderCards(restaurantsData) {
    const hasMaxChoices = choices.length >= 3
      return restaurantsData?.map(restaurant => {
        return (
          <Card
            id={restaurant.id}
            key={restaurant.id}
            type={restaurant.type}
            rating={restaurant.attributes.rating}
            price={restaurant.attributes.price}
            phone={restaurant.attributes.phone}
            api_id={restaurant.attributes.api_id}
            open={restaurant.attributes.open}
            name={restaurant.attributes.name}
            image_url={restaurant.attributes.image_url}
            full_address={restaurant.attributes.full_address}
            toggleChoice={toggleChoice}
            isSelected={choices.includes(restaurant)}
            disabled={hasMaxChoices}
          />
        )
      })
    }

    if (restaurantsData.length > 0) {
      const hasMaxChoices = choices.length >= 3
    return (
      <main className='selection'>
        <h1>What We Eating?</h1>
        <div className='restaurants-container'>
            {renderCards(restaurantsData)}
        </div>
        <Link to='/voting' ><button storeSelections={storeSelections(choices)} disabled={!hasMaxChoices}>{hasMaxChoices ? "Submit your choices for voting" : "Please select three restaurants to submit for voting"}</button></Link>
      </main>
    )
    }
}

export default withRouter(Selection)
