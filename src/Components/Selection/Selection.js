import { data } from 'browserslist';
import { Component } from 'react';
import Restaurants from '../Restaurants/Restaurant';
import './Selection.css';

export class Selection extends Component {

  constructor() {
  super()
    this.state = {
        data: []
      }
    }

    componentDidMount = () => {
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

