import { data } from 'browserslist';
import { Component } from 'react';
import Restaurants from '../Restaurants/Restaurant';
import './Selection.css';

export class Selection extends Component {

  constructor(restaurantData) {
  super(restaurantData)
    this.state = {
        data: [],
        choices: []
      }
    }

    componentDidMount = () => {
      console.log(this.restaurantData)
      this.setState( { data: this.restaurantData} )
  }

    render () {
      return(
        <main className='selection'>
          <h1>What We Eating?</h1>
          <Restaurants restaurants={this.state.data} />
        </main>
      ) 
  }

}

