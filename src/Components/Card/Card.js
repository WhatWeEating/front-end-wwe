import './Card.css';

import React from 'react';

const Card = ({id, key, type, rating, price, phone, api_id, open, name, image_url, full_address, toggleChoice, isSelected, disabled}) => {
  return (
    <div className='card'>
      <img className='image' src={image_url}/>
      <h3>{name}</h3>
      <p>{type}</p>
      <p>{price}</p>
      <p>{rating}</p>
      <a href={phone}>{phone}</a>
      <address>{full_address}</address>
      <button className='select' disabled={disabled && !isSelected} onClick={() => toggleChoice(id)}>{!isSelected ? "Select" : "Unselect"}</button>    
    </div>
  )
}

export default Card;