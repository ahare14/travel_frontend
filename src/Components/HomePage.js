import React, { Component } from 'react'
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
// import Slider from './Components/Slider'
import ImageCard from "./ImageCard";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class HomePage extends Component {
  constructor () {
    super ()
    
  }


  render () {
    return (
      <div>
        <header>
            <NavBar />
            <SearchBar />
          </header>
          <main>
            <ImageCard trips={this.props.trips} pics={this.props.pics} />
          </main>
      </div>
    )
  }
}