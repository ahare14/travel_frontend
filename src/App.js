import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import SignIn from './Components/LoginSignUp/SignIn'
import SignUp from './Components/LoginSignUp/SignUp'
import AllTripDisplay from './Components/AllTripDisplay'
import FavoritesPage from './Components/FavoriteComponent/FavoritesPage';
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
      trips: [],
      pictures: [],
      locations: [],
      allFavorites: [],
      favorites: []
    }
  }

  componentDidMount() {
    this.getPics()
    this.getLocation(picAPI)
    this.getTrips()
    this.getUsers(userAPI)
    this.getFavorites()
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

  // updatedPicState = (newPic) => {
  //   this.setState(state => {
  //     state.pictures = [...this.state.pictures, newPic]
  //     return state
  //   })
  // }

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




  render () {
    return (
      <Router>
        <React.Fragment>
          <Route path='/signin' exact component={SignIn}/>
          <Route path='/signup' component={SignUp} />
          <Route path='/favorites' 
            render={
              props=> 
              <FavoritesPage {...props}
                allFavorites={this.state.allFavorites}
                currentUser={this.state.currentUser}
              />
            }
          />
          <Route path='/homepage' 
            render={ 
              props => 
              <AllTripDisplay {...props}
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
