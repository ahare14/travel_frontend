import React, { Component } from 'react'
import GridLayout from './GridLayout'


export default class AltCard extends Component {

  filterPicsForTrips = () => {
    return this.props.pics.filter(pic => {
      return  pic.trip.id === this.props.trip.id
    })
  }

  handleClick = () => {
    console.log('hello')
  }
  render(){
    return (
      <React.Fragment >
        <div className='card-grid'>
          <GridLayout filteredPics={this.filterPicsForTrips()} selectTrip={this.props.selectTrip} clickFunc={this.handleClick} />
        </div>
      </React.Fragment>
    )
  }
}
