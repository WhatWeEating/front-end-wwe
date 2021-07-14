import React, { useState, useEffect } from 'react'
import { fetchWinnerData } from '../../apiCalls'
import './Winner.css'
import ribbon from '../../assets/ribbon.png'

const Winner = ({ selections, eventID }) => {
  const [winnerID, setWinnerID] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchWinner = async () => {
      try {
        const response = await fetchWinnerData(eventID);
        const winnerData = await response.json();
        await setWinnerID(winnerData);
        console.log(winnerID);
      } catch (error) {
        setError(error.message);
				throw error;
      }
    }
  }, [])

   

  return(
    <main className='winner'>
      <img className='winner-ribbon' src={ribbon} alt='ribbon' />
      <h3 className='winner-name'> WINNER! </h3>
      <h4 className='winner-phone'> 111-111-1111</h4>
      <h4 className='winner-address'> 1234 address ave </h4>
    </main>
  ) 
}

export default Winner;