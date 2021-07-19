import './Selection.css';
import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
import Card from '../Card/Card';


const Selection = ({ restaurantsData, storeSelections, eventId }) => {
  const [choices, setChoices] = useState([])
  const [submitIsClicked, setSubmitIsClicked] = useState(false)

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
            rating={restaurant.attributes.rating}
            price={restaurant.attributes.price}
            phone={restaurant.attributes.phone}
            name={restaurant.attributes.name}
            image_url={restaurant.attributes.image}
            full_address={restaurant.attributes.address}
            toggleChoice={toggleChoice}
            isSelected={choices.includes(restaurant)}
            disabled={hasMaxChoices}
          />
        )
      })
    }

    if (restaurantsData.length > 0 && !submitIsClicked) {
      const hasMaxChoices = choices.length >= 3
    return (
      <main className='selection'>
        <h1>What We Eating?</h1>
        <div className='restaurants-container'>
            {renderCards(restaurantsData)}
        </div>
          <button  onClick={() => {setSubmitIsClicked(true); storeSelections(choices)}} disabled={!hasMaxChoices}>{hasMaxChoices ? "Submit" : "Not Enough Selections"}</button>
      </main>
    )
  } else {
    return (
      <main className='selection-gen-link'>
          <Link className="selection-submit" to={`/voting/${eventId}`}>
          <h3 className='copy-link'>TEST</h3>
        </Link>
        </main>
      )
    }
}

export default withRouter(Selection)
