import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from 'react';

export class MapContainer extends Component {

 

  render() {
    return (
      <React.Fragment>
        <Map
        className="miniMap"
        style={{width: '40%', height: '85%', position: 'fixed', marginLeft: '100px'}}
        google={this.props.google}
        onClick={this.props.clear}
        zoom={16}
        center={{lat: this.props.location.lat, lng: this.props.location.lng}}
        >
          <Marker position={{
            lat: this.props.location.lat,
            lng: this.props.location.lng
          }} />
        </Map>
      </React.Fragment>
    )
  }
  }
  
  export default GoogleApiWrapper({
    apiKey: ("AIzaSyCJwIQJhwFabrSJmjbJdsXoJtRh92-TW0E")
  })(MapContainer)

 