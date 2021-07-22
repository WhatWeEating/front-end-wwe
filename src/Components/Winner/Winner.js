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
    console.log(eventId)
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
    try {
      const response = await postRestaurantsData(body)
      const restaurants = await response.json()
      console.log(restaurants.data.fetchEvent.restaurants)
      setResults(restaurants.data.fetchEvent.restaurants)
      const sorted = restaurants.data.fetchEvent.restaurants.sort((a , b) =>
      b.votes - a.votes
    )[0]
    setWinnerID(sorted)
    } catch (e) {
      setError(e.message)
    }
  }

  const phoneTrim = (phoneNumber) => {
    const splitPhone = phoneNumber.split('')
    const remove = ['(', ')', '-', ' ']
    return splitPhone.filter(i => !remove.includes(i)).join('')
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
  } else if (!Object.keys(winnerID).length && fetchEngaged) {
    return (
      <>
      <main className='winner-container'>
        <h1>TALLYING RESULTS!</h1>
        <LoadWheel />
      </main>
      </>
    )
  } else if (Object.keys(winnerID).length && fetchEngaged) {
    console.log(winnerID, 'winnerID')
    // const winningRestaurant  = restaurantSelections.find(selection => Number(selection.id) === Number(winnerID))
    // const winningRestaurantAddress = addressTrim(winningRestaurant)
    return (
      <main className='winner-container'>
        <div className='winner'>
          <h1 className='winner-text'>WINNER!</h1>
        <img className='winner-ribbon' src={ribbon} alt='ribbon' />
        <div className='winner-info-wrap'>
        <img className='winner-image' src={winnerID.image} alt='ribbon' />
          <div className='winner-info-container'>
          <h3 className='winner-name'>{winnerID.name}</h3>
          <a className='winner-phone' href={`tel:${phoneTrim(winnerID.phone)}`}>{winnerID.phone}</a>
          <h4 className='winner-address'>{winnerID.address}</h4>
          </div>
        </div>
        </div>
      </main>
    )
  }
}

export default Winner;
