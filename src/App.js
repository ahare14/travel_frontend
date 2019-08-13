import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import SignIn from './Components/LoginSignUp/SignIn'
import login from './Components/LoginSignUp/login'
import SignUp from './Components/LoginSignUp/SignUp'
import AllTripDisplay from './Components/AllTripDisplay'
import FavoritesPage from './Components/FavoriteComponent/FavoritesPage';
import TripGenerator from './Components/TripGenerator/TripGenerator';
import './App.css';

const tripAPI = 'https://travel-backend-14.herokuapp.com/trips'
const userAPI = 'https://travel-backend-14.herokuapp.com/users'
const picAPI = 'https://travel-backend-14.herokuapp.com/pictures'

class App extends Component {
  constructor () {
    super ()
    this.state = {
      users: [],
      currentUser: 1,
      currentUserId: 0,
      trips: [],
      pictures: [],
      locations: [],
      allFavorites: [],
      favorites: [],
      compiledFav: [],
      coords: [],
    }
  }

  componentDidMount() {
    this.getPics()
    this.getLocation(picAPI)
    this.getTrips()
    this.getUsers(userAPI)
    this.getFavorites()
    this.getFavorites2()
    navigator.geolocation.getCurrentPosition(this.findLocationSuccess, this.findLocationFailure)
  }

  findLocationSuccess = (position) => {
    this.setCoords(position.coords.latitude,position.coords.longitude)
  }
  
  findLocationFailure = () => {
    console.log('failed')
  }
  
  getTrips = () => {
    fetch('https://travel-backend-14.herokuapp.com/trips')
      .then(response => response.json())
      .then(result => this.setState({
        trips: result
      }))
      .catch(error => console.error('errors', error))
  }

  getFavorites = () => {
    fetch('https://travel-backend-14.herokuapp.com/favorites')
    .then(response => response.json())
    .then(result => this.setState({
      allFavorites: result
    }))
    .catch(error => console.error('errors', error))
  }

  getFavorites2 = () => {
    fetch('https://travel-backend-14.herokuapp.com/favorites')
    .then(response => response.json())
    .then(result => this.favoriteCompiler(result))
    .catch(error => console.error('errors', error))
  }
 
  getUsers(url) {
    fetch(url)
      .then(response => response.json())
      .then(result => this.setState({
        users: result
      }))
      .catch(error => console.error('errors', error))
  }
 
  getPics(){
    fetch('https://travel-backend-14.herokuapp.com/pictures')
      .then(response => response.json())
      .then(result => this.setState({
        pictures: result
      }))
      .catch(error => console.error('errors', error))
  }

  getLocation(url) {
    fetch(url)
      .then(response => response.json())
      .then(result => this.locationCompiler(result))
      .catch(error => console.error('errors', error))
  }

  locationCompiler = (result) => {
    const locationArray = result.reduce((array, picture) => {
      const picObj = {
        location: {lat: picture.latitude, lng: picture.longitude},
        id: picture.id,
        trip: {id: picture.trip.id, title: picture.trip.title}
      }
      array.push(picObj)
      return array
    }, [])
    this.setState({
      locations: locationArray
    })
  }

  favoriteCompiler = (result) => {
    const favArray = result.reduce((array, fav) => {
      const favObj = {
        id: fav.id,
        location: {lat: fav.picture.latitude, lng: fav.picture.longitude},
        description: fav.picture.description,
        img: fav.picture.img_url
      }
      array.push(favObj)
      return array
    }, [])
    this.setState({
      compiledFav: favArray
    })
  }

  postPhoto = (apiBody) => {
    fetch("https://travel-backend-14.herokuapp.com/pictures", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiBody)
    }).catch(error => console.error(error.message))
    .then(response => this.getPics())
  }

  postTrip = (apiBody) => {
    fetch("https://travel-backend-14.herokuapp.com/trips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiBody)
    }).catch(error => console.error(error.message))
    .then(response => this.getTrips())
  }

  postFavorites = (apiBody) => {
    fetch("https://travel-backend-14.herokuapp.com/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiBody)
    }).catch(error => console.error(error.message))
    .then(response => this.getFavorites())
  }

  deleteFavorite = (event) => {
    const id = event
    console.log('delete', id)
    const deleteUrl = `https://travel-backend-14.herokuapp.com/favorites/${id}`
    fetch(deleteUrl, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => this.getFavorites2())
  }

  addToFavorites = (tile) => {
    const newSingleImage = tile
    const apiBody = {
      favorite: {
        user_id: 1,
        picture_id: tile.id
      }
    }
    this.setState(state => {
      state.favorites = [...this.state.favorites, newSingleImage]
      return state
    })
    this.postFavorites(apiBody)
  }

  setCoords = (lat, lng) => {
    this.setState(state => {
      state.coords = [...this.state.coords, lat, lng]
      return state
    })
  }

  render () {  
    return (
      <Router>
        <React.Fragment>
          <Route path='/signin' component={SignIn} />
          <Route exact path='/' component={login} />
          <Route path='/signup' component={SignUp} />
          <Route path='/generator' component={TripGenerator} />
          <Route path='/favorites' 
            render={
              props=> 
              <FavoritesPage {...props}
                allFavorites={this.state.allFavorites}
                compiledFavs={this.state.compiledFav}
                currentUser={this.state.currentUser}
                delete={this.deleteFavorite}
              />
            }
          />
          <Route path='/homepage' 
            render={ 
              props => 
              <AllTripDisplay {...props}
              coords={this.state.coords}
              addToFavorites={this.addToFavorites}
              updatePicArray={this.updatedPicState}
              postPhoto={this.postPhoto}
              postTrip={this.postTrip}
              trips={this.state.trips}
              pics={this.state.pictures}
              locations={this.state.locations}/>
            }
          />
        </React.Fragment>
      </Router>
    )
  }
}
export default App;
