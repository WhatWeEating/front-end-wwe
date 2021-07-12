import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import AnimatedTitle from '../AnimatedTitle/AnimatedTitle'
import { fetchRestaurantsData } from '../../apiCalls'
import './LandingPage.css'

export const LandingPage = () => {
	const [zipCode, setZipCode] = useState('')
	const [restaurantsData, setRestaurantsData] = useState([])
	const [error, setError] = useState('')
	let history = useHistory();

	const handleChange = e => {
		let query = e.target.value.toLowerCase()
		setZipCode(query)
	}

	const assignRestaurantsData = async e => {
		if (zipCode.length === 5 && e.key === 'Enter') {
			setError('')
			try {
				const response = await fetchRestaurantsData()
				const restaurants = await response.json()
				setRestaurantsData(restaurants.data)			
			} catch (e) {
				setError(e.message)
			}
		}
		history.push("/selection");
	}

	return (
		<div className='LandingPage'>
			<AnimatedTitle />
			<h1 className='landing-title'>Find a perf place to go eat</h1>
			<div className='input-container'>
				<i className='fas fa-search'></i>
				<input
					type='text'
					name='search'
					minLength='5'
					maxLength='5'
					pattern='[0-9]{5}'
					autoComplete='off'
					placeholder='Enter Zip Code...'
					value={zipCode}
					onChange={handleChange}
					onKeyDown={assignRestaurantsData}
				/>
			</div>
		</div>
	)
}
