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
    const currentChoices = Array.from(this.state.choices)
    const chosenRestaurant = this.state.data.find(restaurant => restaurant.id === id)
    const index = this.state.choices.findIndex(choice => choice.id === chosenRestaurant.id)
    if(index > -1){
      currentChoices.splice(index, 1)
    } else {
      currentChoices.push(chosenRestaurant)
    }
    this.setState({choices : currentChoices})
    console.log(index)
  }

  render () {
    return(
      <main className='selection'>
        <h1>What We Eating?</h1>
        <Restaurants toggleChoice={this.toggleChoice} restaurants={this.state.data} />
        <p>Here is where the choices go {JSON.stringify(this.state.choices)}</p>
      </main>
    )
  }

}

export default withRouter(Selection)