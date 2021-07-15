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
   // const restaurantProps = [props.location.state.restaurants[0], props.location.state.restaurants[1], props.location.state.restaurants[2]]
   console.log(restaurantProps)
   // setRestaurants(restaurantProps)
   // console.log(props, '<< props')
   // console.log(restaurants, '<< restaurants')
   // console.log(typeof props.location.state.restaurants)
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

 const dragMoveListener = (event) => {
   var target = event.target
   var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
   var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

   target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

   target.setAttribute('data-x', x)
   target.setAttribute('data-y', y)
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
