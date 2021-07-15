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

 const submitVote = event => {
    setFirstPlace(first)
    setSecondPlace(second)
    setThirdPlace(third)
   //Calculates score for individual and sends
   //post request to back end with restaurant and
   //number of points
   event.preventDefault();
   console.log(restaurants, first, second, third)
 }


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

      <div id="outer-first" className="dropzone">
        1st
      <div id="inner-first" className="dropzone"></div>
      </div>
      <div id="outer-second" className="dropzone">
        2nd
      <div id="inner-second" className="dropzone"></div>
      </div>
      <div id="outer-third" className="dropzone">
        3rd
      <div id="inner-third" className="dropzone"></div>
      </div>
      <button className='submit' onClick={event => submitVote(event)}>SUBMIT</button>
    </form>
  )
}


export default Form;
