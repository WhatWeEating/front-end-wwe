import React, { Component, useState, useEffect } from 'react';
import './Form.css';
import Card from '../Card/Card';
import interact from 'interactjs'
let first;
let second;
let third;

const Form = (props) => {
 const [restaurants, setRestaurants] = useState([])
 const [first, setFirstPlace] = useState('')
 const [second, setSecondPlace] = useState('')
 const [third, setThirdPlace] = useState('')

 useEffect(() => {
   console.log(restaurantProps)
 }, [])

  return (
    <form className='form'>
      <div id="yes-drop" className="drag-drop"> {
        <Card
        name={restaurants[0]}
        />
      } </div>
      <div id="yes-drop" className="drag-drop"> {
        <Card
          name={restaurants[1]}
        />
      } </div>
      <div id="yes-drop" className="drag-drop"> {
        <Card
          name={restaurants[2]}
        />
      } </div>
    </form>
  )
}

export default Form;
