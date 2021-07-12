import React from 'react'
import AnimatedTitle from './components/AnimatedTitle/AnimatedTitle'
import { fetchRestaurantsData } from './apiCalls'

export const LandingPage = () => {
	const [zipCode, setZipCode] = useState('')
	const [restaurantsData, setRestaurantsData] = useState([])
	const [error, setError] = useState('')

	const handleChange = e => {
		let query = e.target.value.toLowerCase()
		setZipCode(query)
	}

	const assignRestaurantsData = async e => {
		// console.log(e.key);
		const num = parseInt(zipCode)
		console.log(zipCode.length)
		if (zipCode.length === 5 && e.key === 'Enter') {
			setError('')
			try {
				const response = await fetchRestaurantsData()
				const restaurants = await response.json()
				console.log(restaurants.data)
				setRestaurantsData(restaurants.data)
			} catch (e) {
				setError(e.message)
			}
		}
	}

	return (
		<div className='App'>
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
