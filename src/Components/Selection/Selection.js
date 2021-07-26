import './Selection.css';
import React, { useState, useRef } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
import Card from '../Card/Card';
import { postRestaurantsData } from '../../apiCalls.js'


const Selection = ({ restaurantsData, eventId }) => {
  const [choices, setChoices] = useState([])
  const [submitIsClicked, setSubmitIsClicked] = useState(false)
  const [showCopiedTag, setShowCopiedTag] = useState(false)
  const genLink = useRef()
  console.log(restaurantsData)

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

  const copiedTag = () => {
    setShowCopiedTag(true);
    setTimeout(function(){ setShowCopiedTag(false); }, 3000)
  }

  const postRestaurantSelections = () => {
    console.log('invoke')
    console.log(eventId)
    const body = {
  query : `mutation {
    createRestaurants(input: {
      params: {
        first: {
          eventId: "${eventId}",
          yelpId: "${choices[0].id}",
          image: "${choices[0].attributes.image}",
          address: "${choices[0].attributes.address}",
          phone: "${choices[0].attributes.phone}",
          name: "${choices[0].attributes.name}"
        },
        second: {
          eventId: "${eventId}",
          yelpId: "${choices[1].id}",
          image: "${choices[1].attributes.image}",
          address: "${choices[1].attributes.address}",
          phone: "${choices[1].attributes.phone}",
          name: "${choices[1].attributes.name}"
        },
        third: {
          eventId: "${eventId}",
          yelpId: "${choices[2].id}",
          image: "${choices[2].attributes.image}",
          address: "${choices[2].attributes.address}",
          phone: "${choices[2].attributes.phone}",
          name: "${choices[2].attributes.name}"
        }
      }
    }) {
    restaurant {
      yelpId
    }
    }
  }`
}
 postRestaurantsData(body)
  }

  function renderCards(restaurantsData) {
    const hasMaxChoices = choices.length >= 3
      return restaurantsData?.map(restaurant => {
        return (
          <Card
            id={restaurant.id}
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
      <main className='restaurant-selection'>
        <h1 className='title'>What We Eating?</h1>
        <button className='submit-votes' onClick={() => {setSubmitIsClicked(true);  postRestaurantSelections();}} disabled={!hasMaxChoices}>{hasMaxChoices ? "Submit" : "Not Enough Selections"}</button>
        <div className='restaurants-container'>
            {renderCards(restaurantsData)}
        </div>
          <button className='submit-votes' onClick={() => {setSubmitIsClicked(true);  postRestaurantSelections();}} disabled={!hasMaxChoices}>{hasMaxChoices ? "Submit" : "Not Enough Selections"}</button>
      </main>
    )
  } else {

    return (
      <main className='selection-gen-link-container'>
        <div className='selection-gen-link'>
        <h1>SHARE THIS LINK WITH YOUR FRIENDS</h1>
          <h3 ref={genLink} className='copy-link'>https://mysterious-cove-94790.herokuapp.com/voting/{eventId}</h3>
        <div className='selection-button-container'>
          {showCopiedTag ?
          <span className='selection-copied-flag hidden'>COPIED!</span> : null
          }
          <button className='selection-copy-link-button button' onClick={() => {navigator.clipboard.writeText((genLink.current).textContent); copiedTag() }} >COPY LINK!</button>
        <Link className="selection-submit" to={`/voting/${eventId}`}>
          <button className='selection-go-vote-button button'>GO VOTE!</button>
        </Link>
          </div>
          </div>
        </main>
      )
    }
}

export default withRouter(Selection)
