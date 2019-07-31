import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from 'react';

export class MapContainer extends Component {

 

  render() {
    return (
      <React.Fragment>
        <Map
        className="miniMap"
        google={this.props.google}
        onClick={this.props.clear}
        zoom={13}
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
    apiKey: ("AIzaSyB31ElkAZ5mYl1cG0bPjdhzd8EtFY6rplg")
  })(MapContainer)

 