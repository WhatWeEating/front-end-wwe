import React, { useState, useEffect } from 'react'

const Winner = ({ selections, eventID }) => {
  const [eventID, setEventID] = useState('')
  const [restaurants, setrestaurants] = useState([]);

  useEffect(() => {
    
  }, [])

  return(
    <main className='selection'>
      <h1>What We Eating?</h1>
      <h3> WINNER! </h3>
    </main>
  ) 
}

export default Winner;