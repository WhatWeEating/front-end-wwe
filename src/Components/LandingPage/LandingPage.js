import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import AnimatedTitle from '../AnimatedTitle/AnimatedTitle'
import { fetchRestaurantsData } from '../../apiCalls'
import './LandingPage.css'

export const LandingPage = ({ storeData }) => {
	const [error, setError] = useState('')
	const history = useHistory()
  const [slideIndex, setSlideIndex] = useState(1)
  const [showTutorial, setShowTutorial] = useState(false)

  useEffect(() => {
    showSlides(slideIndex)
  })

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
		} else if (!zipCodeValidation && e.key === 'Enter' || zipCode === '00000' ) {
			setError('Please enter a valid 5 digit zip code')
		}
	}

  const changeSlide = (n) => {
    if (slideIndex === 5 && n === +1) {
      setSlideIndex(1)
    } else if (slideIndex === 1 && n === -1) {
      setSlideIndex(5)
    } else {
    showSlides(setSlideIndex(slideIndex + n));
    }
  }

  const currentSlide = (n) => {
    showSlides(setSlideIndex(n));
  }

  const showSlides = (n) => {
  const slides = document.getElementsByClassName("slides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {setSlideIndex(1)}
  if (n < 1) {setSlideIndex(slides.length)}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
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
      <h2 className='how-to'> How to: </h2>
      <div className='slideshow-container'>
        <div className='slides fade'>
          <div className='slide-number'>1 / 5</div>
          <img 
          src="https://media1.giphy.com/media/viKNMoEsrxHDIff66w/giphy.gif?cid=790b76115cc6ae20ba7e0b4ea0052bd6ebab5cb29596b69d&amp;rid=giphy.gif&amp;ct=g"
           alt='instructions step 1' style={{width: '100%'}}/>
          <div className='caption'></div>
        </div>
        <div className='slides fade'>
          <div className='slide-number'>2 / 5</div>
          <img src="https://media2.giphy.com/media/Lund4ioPyM5fzY89jx/giphy.gif?cid=790b76113d0c245d36c6899233ef042b9ebd2f0feeea19c6&amp;rid=giphy.gif&amp;ct=g" alt='instructions step 2'/>
          <div className='caption'></div>
        </div>
        <div className='slides fade'>
          <div className='slide-number'>3 / 5</div>
          <img src="https://media4.giphy.com/media/KBV8Q5H57Xi7dUdYxr/giphy.gif?cid=790b76112ebc63bab71876bda3cbff623d62e676fd20e8cc&amp;rid=giphy.gif&amp;ct=g" alt='instructions step 3'/>
          <div className='caption'></div>
        </div>
        <div className='slides fade'>
          <div className='slide-number'>4 / 5</div>
          <img src="https://media3.giphy.com/media/vJARbH8db30adFTeyn/giphy.gif?cid=790b7611199dc4f019792c3f4d09dccb29e31d2043828c8f&amp;rid=giphy.gif&amp;ct=g" alt='instructions step 4'/>
          <div className='caption'></div>
        </div>
        <div className='slides fade'>
          <div className='slide-number'>5 / 5</div>
          <img src="https://media4.giphy.com/media/X58cXJNMeJ6aC53hyJ/giphy.gif?cid=790b761166a2d38043b03ca5408cb88f0658a85bdb1b4b64&amp;rid=giphy.gif&amp;ct=g" alt='instructions step 5'/>
          <div className='caption'></div>
        </div>
      <button className='prev' onClick={() => changeSlide(-1)}>&#10094;</button>
      <button className='next' onClick={() => changeSlide(+1)}>&#10095;</button>
      </div>
      <div className='slide-dots'>
        <span className='dot' onClick={() => currentSlide(1)}></span>
        <span className='dot' onClick={() => currentSlide(2)}></span>
        <span className='dot' onClick={() => currentSlide(3)}></span>
        <span className='dot' onClick={() => currentSlide(4)}></span>
        <span className='dot' onClick={() => currentSlide(5)}></span>
      </div> 
		</div>
	)
}
