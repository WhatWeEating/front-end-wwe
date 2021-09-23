import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import AnimatedTitle from '../AnimatedTitle/AnimatedTitle'
import { fetchRestaurantsData } from '../../apiCalls'
import './LandingPage.css'

export const LandingPage = ({ storeData }) => {
	const [error, setError] = useState('')
	const history = useHistory()

	const validateRestaurantData = async e => {
		setError('')
		const zipCode = e.target.value
		const zipCodeValidation = /[0-9]{5}/.test(zipCode)
		if (zipCodeValidation && e.key === 'Enter' && zipCode !== '00000') {
      const fetchId = new Date().valueOf()
			try {
				const response = await fetchRestaurantsData(zipCode, fetchId)
				const restaurants = await response.json()
        // console.log(restaurants.data);
				storeData(restaurants.data, fetchId)
				history.push('/selection')
			} catch (e) {
				setError(e.message)
			}
		} else if (!zipCodeValidation && e.key === 'Enter' || zipCode === '00000') {
			setError('Please enter a valid 5 digit zip code')
		}
	}

  const changeSlide = (n) => {

  }

  const currentSlide = (n) => {

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
					placeholder='Enter 5 digit zip code...'
					onKeyUp={validateRestaurantData}
					// placeholder='Enter Zip Code...'
					// onKeyDown={assignRestaurantsData}
					// onKeyUp={validateRestaurantData}
				/>
			</div>
      <div className='slideshow-container'>
        <div className='slides fade'>
          <div className='slide-number'></div>
          <h1>slide-1</h1>
          <div className='caption'></div>
        </div>
        <div className='slides fade'>
          <div className='slide-number'></div>
          <h1>slide-2</h1>
          <div className='caption'></div>
        </div>
        <div className='slides fade'>
          <div className='slide-number'></div>
          <h1>slide-3</h1>
          <div className='caption'></div>
        </div>
        <div className='slides fade'>
          <div className='slide-number'></div>
          <h1>slide-4</h1>
          <div className='caption'></div>
        </div>
        <div className='slides fade'>
          <div className='slide-number'></div>
          <h1>slide-5</h1>
          <div className='caption'></div>
        </div>
      <a className='prev' onClick={() => changeSlide(-1)}></a>
      <a className='prev' onClick={() => changeSlide(1)}></a>
      </div>
      <div className='slide-dots'>
        <span className='dot' onClick={() => currentSlide(1)}></span>
        <span className='dot' onClick={() => currentSlide(2)}></span>
        <span className='dot' onClick={() => currentSlide(3)}></span>
        <span className='dot' onClick={() => currentSlide(4)}></span>
      </div>
		</div>
	)
}
