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
  
 }, [])

  return (

  )
}

export default Form;
