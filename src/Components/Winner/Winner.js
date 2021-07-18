import React, { useState } from 'react'
import { fetchWinnerData } from '../../apiCalls'
import './Winner.css'
import ribbon from '../../assets/ribbon.png'

const Winner = ({ restaurantSelections, eventID }) => {
  const [winnerID, setWinnerID] = useState('')
  const [error, setError] = useState('')
  const [voteButtonIsEngaged, setVoteButtonIsEngaged] = useState(false)
  const [fetchEngaged, setFetchEngaged] = useState(false)
  console.log(restaurantSelections, 'restaurantSelections')

  const fetchWinnerButton = (eventID) => {
    setFetchEngaged(true);
    setWinnerID('1')
  }

  const addressTrim = (address) => {
    const winningRestaurantAddressSplit = address.attributes.full_address.split(' ')
    return `${winningRestaurantAddressSplit[0]} ${winningRestaurantAddressSplit[2]} ${winningRestaurantAddressSplit[3]}, ${winningRestaurantAddressSplit[4]} ${winningRestaurantAddressSplit[5]} ${winningRestaurantAddressSplit[6]}`
  }
   
  if (!winnerID.length && !fetchEngaged) {
    return(
      <main className='winner-container'>
        <div className='tally-votes-view'>
        {!voteButtonIsEngaged ? 
        <>
        <h1>Ready To View Results?</h1>
        <button className='tally-votes-button winner-button' onClick={(e) => setVoteButtonIsEngaged(!voteButtonIsEngaged)}> TALLY VOTES!</button>
        </> : 
        (<>
        <h2>ARE YOU SURE YOU WANT TO CLOSE VOTING? </h2>
        <button className='yes-button winner-button' onClick={(e) => fetchWinnerButton(eventID)} >YES!</button>
        <button className='no-button winner-button'onClick={(e) => setVoteButtonIsEngaged(!voteButtonIsEngaged)} >NOT YET!</button>
        </>
        )} 
        </div>
      </main>
    ) 
  } else if (!winnerID.length && fetchEngaged) {
    return (
      <h1>HI</h1>
    )
  } else if (winnerID.length && fetchEngaged) {
    console.log(winnerID, 'winnerID')
    const winningRestaurant  = restaurantSelections.find(selection => Number(selection.id) === Number(winnerID))
    const winningRestaurantAddress = addressTrim(winningRestaurant)
    return (
      <main className='winner-container'>
        <div className='winner'>
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