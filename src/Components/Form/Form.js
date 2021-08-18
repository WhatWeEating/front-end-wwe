import React, { useState, useEffect } from 'react'
import './Form.css'
import { postRestaurantsData } from '../../apiCalls.js'
import interact from 'interactjs'
import { useHistory } from 'react-router-dom'

const Form = () => {
	const [firstChoice, setFirstPlace] = useState('')
	const [secondChoice, setSecondPlace] = useState('')
	const [thirdChoice, setThirdPlace] = useState('')
	const [error, setError] = useState('')
	const [dropped, setDropped] = useState(false)
	const history = useHistory()
	const [restaurantSelections, setRestaurantSelections] = useState([])
	const [uid, setUid] = useState('')

	useEffect(() => {
    console.log('useEffect')
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

		const fetchData = async () => {
			try {
				const response = await postRestaurantsData(body)
				const restaurants = await response.json()
				setRestaurantSelections(restaurants.data.fetchEvent.restaurants)
				setUid(restaurants.data.fetchEvent.uid)
			} catch (e) {
				setError(e.message)
			}
		}
		fetchData()
	}, [])

	const submitVote = event => {
    const body = {
  query : `mutation {
    updateRestaurants(input: {
      params: {
        first: {
          eventId: "${uid}",
          yelpId: "${firstChoice}"
        },
        second: {
          eventId: "${uid}",
          yelpId: "${secondChoice}"
        },
        third: {
          eventId: "${uid}",
          yelpId: "${thirdChoice}"
        }
      }
    }) {
    restaurant {
      yelpId
    }
    }
  }`
}
		event.preventDefault();
		postRestaurantsData(body);
		history.push(`/winner/${uid}`);
	}

	const dragMoveListener = event => {
		var target = event.target
		var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
		var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

		target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

		target.setAttribute('data-x', x)
		target.setAttribute('data-y', y)
	}

	const dropzone = interact('.dropzone').dropzone({
		accept: '#yes-drop',
		overlap: 0.25,

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
			if (event.target.id === 'outer-first') {
				setFirstPlace(event.relatedTarget.dataset.yelpid)
			} else if (event.target.id === 'outer-second') {
				setSecondPlace(event.relatedTarget.dataset.yelpid)
			} else {
				setThirdPlace(event.relatedTarget.dataset.yelpid)
			}
			if (firstChoice.length && secondChoice.length && thirdChoice.length) {
				setDropped(true)
			}
		},
		ondropdeactivate: function (event) {
			event.target.classList.remove('drop-active')
			event.target.classList.remove('drop-target')
		},
	})
	useEffect(() => {
		if (
			window.innerWidth < 150 ||
			(window.innerWidth === 1000 && window.innerHeight === 660)
		) {
			setFirstPlace(restaurantSelections[0])
			setSecondPlace(restaurantSelections[1])
			setThirdPlace(restaurantSelections[2])
			setDropped(true)
		}
	}, [])
	const dragAndDrop = interact('.drag-drop').draggable({
		inertia: true,
		modifiers: [
			interact.modifiers.restrictRect({
				restriction: 'parent',
				endOnly: true,
			}),
		],
		autoScroll: true,
		listeners: { move: dragMoveListener },
	})
	return (
		<form className='form'>
			{restaurantSelections.length && (
				<>
        {/* <div className='drag-drop-start'> */}
					<div data-yelpid={restaurantSelections[0].yelpId} id='yes-drop' className='drag-drop drag-drop-one'>
            <img src={restaurantSelections[0].image} className='drag-drop-image'></img>
						<p className='drag-drop-name'>{restaurantSelections[0].name}</p>
					</div>
					<div data-yelpid={restaurantSelections[1].yelpId} id='yes-drop' className='drag-drop drag-drop-two'>
          <img src={restaurantSelections[1].image} className='drag-drop-image'></img>
						<p className='drag-drop-name'>{restaurantSelections[1].name}</p>
					</div>
					<div data-yelpid={restaurantSelections[2].yelpId} id='yes-drop' className='drag-drop drag-drop-three'>
          <img src={restaurantSelections[2].image} className='drag-drop-image'></img>
						<p className='drag-drop-name'>{restaurantSelections[2].name}</p>
					</div>
          {/* </div> */}
				</>
			)}
      <div className='dropped-status'>
			{!dropped ? (
				<h1 className='instruction'>Drag and Drop Your Choices</h1>
			) : (
				<button className='submit' onClick={event => submitVote(event)}>
					SUBMIT SELECTIONS
				</button>
			)}
      </div>
			{/* <div className='dropzone-container'>
			</div> */}
			<div className='podiums-wrap'>
				<div className='podium-container podium-container-two'>
				  <div id='outer-second' className='second-dropzone dropzone'></div>
          <div className='podium podium-two'>
					  <h1 className='podium-text'>2nd</h1>
          </div>
				</div>
				<div className='podium-container podium-container-one'>
				  <div id='outer-first' className='first-dropzone dropzone'></div>
          <div className='podium podium-one'>
					  <h1 className='podium-text'>1st</h1>
          </div>
				</div>
				<div className='podium-container podium-container-three'>
				  <div id='outer-third' className='third-dropzone dropzone'></div>
          <div className='podium podium-three'>
					  <h1 className='podium-text'>3rd</h1>
          </div>
				</div>
			</div>
		</form>
	)
}

export default Form
