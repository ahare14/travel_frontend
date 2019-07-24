import React, { Component } from 'react'
// import AltCard from './AltCardDisplay/AltCard'
// import Icon from '@material-ui/core/Icon';
// import Button from '@material-ui/core/Button';
// import Slider from './Components/Slider'
// import ImageCard from "./ImageCard";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import TripContainer from './AltCardDisplay/TripContainer';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class AllTripDisplay extends Component {


  render () {
    // console.log('all trip dislpay',this.props.pics)
    return (
      <div className='hompage'>
        <header>
            <NavBar />
            <SearchBar />
          </header>
          <main>
            <TripContainer trips={this.props.trips} pics={this.props.pics} />
          </main>
      </div>
    )
  }
}
{/* <ImageCard trips={this.props.trips} pics={this.props.pics} /> */}