import React, { Component } from 'react'
import GridLayout from './GridLayout'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));


export default class AltCard extends Component {

  filterPicsForTrips = () => {
    return this.props.pics.filter(pic => {
      return  pic.trip.id === this.props.trip.id
    })
  }

 

  render(){
    return (
      <React.Fragment>
        <div className="tripCard">
          <h3>{this.props.trip.title}</h3>
          <div className="tripContent">
            <GridLayout filteredPics={this.filterPicsForTrips()} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}
// export default function AltCard (props){
//   const classes = useStyles()

//   const filterPicsForTrips = props.pics.filter(pic => {
//       return  pic.trip.id === props.trip.id
//     })

 


//   return (
//     <div className={classes.root}>
//       <Grid container spacing={3}>
//         <Grid container item xs={12} spacing={3}>
//           <h3>{props.trip.title}</h3>
//           <GridLayout filteredPics={filterPicsForTrips} />
//         </Grid>
//       </Grid>
//     </div>
//   )
// }