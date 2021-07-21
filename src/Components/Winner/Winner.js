import React, { useState } from 'react'
import { postRestaurantsData } from '../../apiCalls'
import './Winner.css'
import ribbon from '../../assets/ribbon.png'
import LoadWheel from '../../Components/LoadWheel/LoadWheel'

const Winner = ({ restaurantSelections, eventID }) => {
  const [winnerID, setWinnerID] = useState('')
  const [error, setError] = useState('')
  const [results, setResults] = useState('')
  const [voteButtonIsEngaged, setVoteButtonIsEngaged] = useState(false)
  const [fetchEngaged, setFetchEngaged] = useState(false)
  console.log(restaurantSelections, 'restaurantSelections')



  const fetchWinnerButton = async () => {
    const url = window.location.href
		const eventId = url.split('/').pop()
    const body = {
			query: `query {
          fetchEvent(uid: "${eventId}") {
          uid
          restaurants {
            yelpId
            votes
            image
            address
            phone
            name
        }
      }
    }`,
		}
    setFetchEngaged(true);
    await fetchData(body);

    // setTimeout(function(){ setWinnerID('2'); }, 3000)
  }

  const fetchData = async (body) => {
    console.log('hello')
    try {
      console.log('hello2')
      const response = await postRestaurantsData(body)
      const restaurants = await response.json()
      setResults(restaurants.data.fetchEvent.restaurants)
      console.log(restaurants.data.fetchEvent.restaurants)
      // console.log(restaurants.data.fetchEvent)
    } catch (e) {
      setError(e.message)
    }
  }

  const addressTrim = (address) => {
    const winningRestaurantAddressSplit = address.attributes.full_address.split(' ')
    return `${winningRestaurantAddressSplit[0]} ${winningRestaurantAddressSplit[2]} ${winningRestaurantAddressSplit[3]}, ${winningRestaurantAddressSplit[4]} ${winningRestaurantAddressSplit[5]} ${winningRestaurantAddressSplit[6]}`
  }

  if (!fetchEngaged) {
    return(
      <main className='winner-container'>
        <div className='tally-votes-view'>
        {!voteButtonIsEngaged ?
        <>
        <h1>Ready To View Results?</h1>
        <button className='tally-votes-button winner-button' onClick={(e) => setVoteButtonIsEngaged(!voteButtonIsEngaged)}> TALLY VOTES!</button>
        </> :
        (<>
        <h2>ARE YOU SURE YOU WANT TO CLOSE VOTING?</h2>
        <button className='yes-button winner-button' onClick={fetchWinnerButton} >YES!</button>
        <button className='no-button winner-button'onClick={(e) => setVoteButtonIsEngaged(!voteButtonIsEngaged)} >NOT YET!</button>
        </>
        )}
        </div>
      </main>
    )
  } else if (!winnerID.length && fetchEngaged) {
    return (
      <>
      <main className='winner-container'>
        <h1>TALLYING RESULTS!</h1>
        <LoadWheel />
      </main>
      </>
    )
  } else if (winnerID.length && fetchEngaged) {
    console.log(winnerID, 'winnerID')
    const winningRestaurant  = restaurantSelections.find(selection => Number(selection.id) === Number(winnerID))
    const winningRestaurantAddress = addressTrim(winningRestaurant)
    return (
      <main className='winner-container'>
        <div className='winner'>
          <h1 className='winner-text'>WINNER!</h1>
        <img className='winner-ribbon' src={ribbon} alt='ribbon' />
        <div className='winner-info-wrap'>
        <img className='winner-image' src={winningRestaurant.attributes.image_url} alt='ribbon' />
          <div className='winner-info-container'>
          <h3 className='winner-name'>{winningRestaurant.attributes.name}</h3>
          <a className='winner-phone' href='tel:1111111111'>{winningRestaurant.attributes.phone}</a>
          <h4 className='winner-address'>{winningRestaurantAddress}</h4>
          </div>
        </div>
        </div>
      </main>
    )
  }
}

export default Winner;
