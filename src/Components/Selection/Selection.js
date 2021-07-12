import { data } from 'browserslist';
import { Component } from 'react';
import Restaurants from '../Restaurants/Restaurant';
import './Selection.css'
import { withRouter } from 'react-router';

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

    render () {
      return(
        <main className='selection'>
          <h1>What We Eating?</h1>
          <Restaurants restaurants={this.state.data} />
        </main>
      ) 
  }

}

export default withRouter(Selection)