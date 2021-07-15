import './Selection.css';

import { Component } from 'react';

import { withRouter } from 'react-router';

import Restaurants from '../Restaurants/Restaurant';

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
    const chosenRestaurant = this.state.data.find(restaurant => restaurant.id === id)
    console.log(chosenRestaurant)
  }

  render () {
    return(
      <main className='selection'>
        <h1>What We Eating?</h1>
        <Restaurants toggleChoice={this.toggleChoice} restaurants={this.state.data} />
      </main>
    )
  }

}

export default withRouter(Selection)