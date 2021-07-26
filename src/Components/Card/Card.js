import './Card.css';
import starOutline from '../../assets/star_outline.png'
import starFill from '../../assets/star_fill.svg'
import starHalf from '../../assets/star_half.svg'

import React from 'react';
import { indexOf } from 'lodash';

const Card = ({id, rating, price, phone, name, image_url, full_address, toggleChoice, isSelected, disabled}) => {

  const printEmptyStars = () => {
    const fiveEmpty = Array(5).fill(starOutline)
    return fiveEmpty.map((image, index) => <img className="empty-star" src={image} alt='empty star' key={`empty-star${id}${index}`}/>)
  }

  // const printFullStars = () => {
  //   const restRating = Math.floor(rating);
  //   const hasHalfStar = (rating - Math.floor(rating)) !== 0;
  //   console.log(rating, Math.floor(rating))
  //   const stars = Array(restRating).fill(starFill)
  //     return stars.map((image, index) => <img className="full-star" src={image} alt='star' key={`full-star${id}${index}`}/>)
  //   }

  const printFullStars = () => {
    const restRating = Math.floor(rating);
    const hasHalfStar = (rating - Math.floor(rating)) !== 0;
    console.log(rating, Math.floor(rating))
    const stars = Array(restRating).fill(starFill)
    if (!hasHalfStar) {
      return stars.map((image, index) => <img className="full-star" src={image} alt='star' key={`full-star${id}${index}`}/>)
    } else {
      return ( <>
        {stars.map((image, index) => <img className="full-star" src={image} alt='star' key={`full-star${id}${index}`}/>)}
        <img className="half-star" src={starHalf} alt='half star' key={`half-star${id}`}/>
        </>
      )
    }
    }

  return (
    <div key={id} className='card'>
      <img className='restaurant-image' src={image_url}/>
      <div className='restaurant-details'>
        <div className='name-price'>
          <h3 className='restaurant-name'>{name}</h3>
        <p className='restaurant-price'>{price}</p>
        </div>
          <span className='restaurant-empty-stars'>{printEmptyStars()}</span>
          <span className='restaurant-full-stars'>{printFullStars()}</span>
        <a href={phone}>{phone}</a>
        <address>{full_address}</address>
      </div>
      {/* <button className='select' disabled={disabled && !isSelected} onClick={() => toggleChoice(id)}>{!isSelected ? "Select" : "Unselect"}</button>     */}
    </div>
  )
}

export default Card;