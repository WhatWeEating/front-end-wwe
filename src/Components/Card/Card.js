import './Card.css';
import starOutline from '../../assets/star_outline.png'
import starFill from '../../assets/star_fill.png'

import React from 'react';
import { indexOf } from 'lodash';

const Card = ({id, rating, price, phone, name, image_url, full_address, toggleChoice, isSelected, disabled}) => {

  const printEmptyStars = () => {
    const fiveEmpty = Array(5).fill(starOutline)
    return fiveEmpty.map(image => <img className="empty-star" src={image} alt='empty star' key={`empty-star${indexOf(image)}`}/>)
  }

  const printFullStars = () => {
    const rating = Math.round(rating)
    const stars = Array(rating).fill(starFill)
    return stars.map(image => <img className="full-star" src={image} alt='star' key={`full-star${indexOf(image)}`}/>)
  }

  return (
    <div key={id} className='card'>
      <img className='restaurant-image' src={image_url}/>
      <div className='restaurant-info'>
        <div className='name-rating'>
        <h3 className='restaurant-name'>{name}</h3>
        <p className='restaurant-rating'>{printEmptyStars()}</p>
        {/* <p className='restaurant-rating'>{printFullStars()}</p> */}
        </div>
        <p className='restaurant-price'>{price}</p>
        <a href={phone}>{phone}</a>
        <address>{full_address}</address>
      </div>
      {/* <button className='select' disabled={disabled && !isSelected} onClick={() => toggleChoice(id)}>{!isSelected ? "Select" : "Unselect"}</button>     */}
    </div>
  )
}

export default Card;