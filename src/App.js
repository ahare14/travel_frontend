import React from 'react';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Carousel from "./Components/Carousel";
import ImageCard from "./Components/ImageCard";
import SearchBar from "./Components/SearchBar";
import NavBar from "./Components/NavBar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';

function App() {


  return (
    <div>
      <header>
        <NavBar />
        <SearchBar />
      
        <Carousel />
      </header>
      <main>
        <ImageCard />
      </main>
    </div>
  );
}

export default App;
