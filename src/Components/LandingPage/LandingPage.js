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
