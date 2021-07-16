import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import AnimatedTitle from '../AnimatedTitle/AnimatedTitle'
import { fetchRestaurantsData } from '../../apiCalls'
import './LandingPage.css'

export const LandingPage = ({ storeData }) => {
	const [zipCode, setZipCode] = useState('')
	const [restaurantsData, setRestaurantsData] = useState([])
	const [error, setError] = useState('')
	const history = useHistory()

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
        storeData(restaurants.data)
				history.push('/selection')
			} catch (e) {
				setError(e.message)
				throw e
			}
		}	
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
