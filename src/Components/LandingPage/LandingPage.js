import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import AnimatedTitle from '../AnimatedTitle/AnimatedTitle'
import { fetchRestaurantsData } from '../../apiCalls'
import './LandingPage.css'

export const LandingPage = ({ storeData }) => {
	// const [zipCode, setZipCode] = useState('')
	// const [restaurantsData, setRestaurantsData] = useState([])
	const [error, setError] = useState('')
	const history = useHistory()

	// const handleChange = e => {
	// 	let query = e.target.value.toLowerCase()
	// 	setZipCode(query)
	// }

	const validateRestaurantData = async e => {
    setError('')
		const fetchId = new Date().valueOf()
    const zipCode = e.target.value
    const zipCodeValidation = /[0-9]{5}/.test(zipCode)
		if (zipCodeValidation && e.key === 'Enter') {
			try {
				const response = await fetchRestaurantsData(zipCode, fetchId)
				const restaurants = await response.json()
				storeData(restaurants.data)
				history.push('/selection')
			} catch (e) {
				setError(e.message)
			}
		} else if (!zipCodeValidation && e.key === 'Enter') {
      setError('Please enter 5 digit zip code')
    }
	}

	return (
		<div className='LandingPage'>
			<AnimatedTitle />
			<h1 className='landing-title'>Find a perf place to go eat</h1>
      {error && <h1 className='err-msg'>{error}</h1>}
			<div className='input-container'>
				<i className='fas fa-search'></i>
				<input
					type='text'
					name='search'
					maxLength='5'
					pattern='[0-9]{5}'
					autoComplete='off'
					placeholder='Enter Zip Code...'
					onKeyUp={validateRestaurantData}
				/>
			</div>
		</div>
	)
}
