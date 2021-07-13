import React from 'react';
import './Card.css';

const Card = ({id, key, type, rating, price, phone, api_id, open, name, image_url, full_address}) => {
  return (
    <div className='card'>
        <img className='image' src={image_url}/>
        <h3>{name}</h3>
        <p>{type}</p>
        <p>{price}</p>
        <p>{rating}</p>
        <phone>{phone}</phone>
        <address>{full_address}</address>
    </div>
  )
}

export default Card;