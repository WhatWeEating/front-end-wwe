import React from 'react';
import Card from '../Card/Card';
import './Restaurant.css';

const Restaurants = (restaurants) => {
    const restaurantCards = 
        restaurants.restaurants.map(restaurant => {
        return (
          <Card
            id={restaurant.id}
            key={restaurant.id}
            type={restaurant.type}
            rating={restaurant.attributes.rating}
            price={restaurant.attributes.price}
            phone={restaurant.attributes.phone}
            api_id={restaurant.attributes.api_id}
            open={restaurant.attributes.open}
            name={restaurant.attributes.name}
            image_url={restaurant.attributes.image_url}
            full_address={restaurant.attributes.full_address}
          />
        )
      })

    return (
        <div className='restaurants-container'>
            {restaurantCards}
        </div>
    )
}

export default Restaurants;
