import React, { Component, useState, useEffect } from 'react';
import './Form.css';
import Card from '../Card/Card';
import interact from 'interactjs';
import { useHistory } from "react-router-dom";

const Form = ({ restaurantSelections }) => {
 const [firstChoice, setFirstPlace] = useState('')
 const [secondChoice, setSecondPlace] = useState('')
 const [thirdChoice, setThirdPlace] = useState('')
 const history = useHistory()


 const submitVote = event => {
 //Calculates score for individual and sends
 //post request to back end with restaurant and
 //number of points
 event.preventDefault();
 history.push('/winner')
}

 const dragMoveListener = (event) => {
   var target = event.target
   var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
   var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

   target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

   target.setAttribute('data-x', x)
   target.setAttribute('data-y', y)
 }

 const dropzone = interact('.dropzone').dropzone({
   accept: '#yes-drop',
   overlap: 0.75,

   ondragenter: function (event) {
     let draggableElement = event.relatedTarget
     let dropzoneElement = event.target

     // feedback the possibility of a drop
     dropzoneElement.classList.add('drop-target')
     draggableElement.classList.add('can-drop')
   },
   ondragleave: function (event) {
     // remove the drop feedback style
     event.target.classList.remove('drop-target')
     event.relatedTarget.classList.remove('can-drop')
   },
   ondrop: function (event) {
     event.relatedTarget.classList.add('dropped')
     if (event.target.id === 'inner-first' || event.target.id === 'outer-first') {
       setFirstPlace(event.relatedTarget.innerHTML)
     } else if (event.target.id === 'inner-second' || event.target.id === 'outer-second') {
       setSecondPlace(event.relatedTarget.innerHTML)
     } else {
       setThirdPlace(event.relatedTarget.innerHTML)
     }
   },
   ondropdeactivate: function (event) {
     event.target.classList.remove('drop-active')
     event.target.classList.remove('drop-target')
   }
 })

 const dragAndDrop = interact('.drag-drop')
   .draggable({
     inertia: true,
     modifiers: [
       interact.modifiers.restrictRect({
         restriction: 'parent',
         endOnly: true
       })
     ],
     autoScroll: true,
     listeners: { move: dragMoveListener }
   })

   console.log(restaurantSelections[0])

   // <button className='submit' onClick={event => submitVote(event)}>SUBMIT</button>
   return (
    <form className='form'>
    <div id="yes-drop" className="drag-drop">
      <p>{restaurantSelections[0].attributes.name}</p>
    </div>
      <div id="yes-drop" className="drag-drop">
        <p>{restaurantSelections[1].attributes.name}</p>
      </div>
      <div id="yes-drop" className="drag-drop">
        <p>{restaurantSelections[2].attributes.name}</p>
      </div>
    <h1 className='instruction'>Drag and Drop Your Choices</h1>
    <div className='dropzone-container'>
      <div id="outer-second" className="second dropzone"></div>
      <div id="outer-first" className="first dropzone"></div>
      <div id="outer-third" className="third dropzone"></div>
    </div>
    <div className='podium-container'>
      <div className='podium-one'>
        <h1 className='podium-text'>2nd</h1>
      </div>
      <div className='podium-two'>
        <h1 className='podium-text'>1st</h1>
      </div>
      <div className='podium-three'>
        <h1 className='podium-text'>3rd</h1>
      </div>
    </div>
    </form>
  )
}


export default Form;
