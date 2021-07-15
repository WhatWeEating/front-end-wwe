import './Selection.css';

import { Component } from 'react';

import { withRouter } from 'react-router';

import Card from '../Card/Card';

class Selection extends Component {

  constructor(restaurantData) {
    super(restaurantData)
    this.state = {
        data: [],
        choices: []
    }
  }

  componentDidMount = () => {
    this.setState( { data: this.props.location.state.restaurantsData } )
  }

  toggleChoice = (id) => {
    const currentChoices = Array.from(this.state.choices)
    const chosenRestaurant = this.state.data.find(restaurant => restaurant.id === id)
    const index = this.state.choices.findIndex(choice => choice.id === chosenRestaurant.id)
    if(index > -1){
      currentChoices.splice(index, 1)
    } else {
      currentChoices.push(chosenRestaurant)
    }
    this.setState({choices : currentChoices})
  }

  render () {
    const restaurants = this.state.data
    let restaurantCards = []
    if(restaurants.length){
      restaurantCards =
        restaurants.map(restaurant => {
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
            toggleChoice={this.toggleChoice}
            isSelected={this.state.choices.includes(restaurant)}
          />
        )
      })
    }
    const hasMaxChoices = this.state.choices.length >= 3

    return(
      <main className='selection'>
        <h1>What We Eating?</h1>
        <div className='restaurants-container'>
            {restaurantCards}
        </div>
        <button disabled={!hasMaxChoices}>{hasMaxChoices ? "Submit your choices for voting" : "Please select three restaurants to submit for voting"}</button>
      </main>
    )
  }

}

export default withRouter(Selection)