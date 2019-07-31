import React from 'react'
import AltCard from './AltCard'
import { makeStyles } from '@material-ui/core/styles';
import AddAPhoto from '@material-ui/icons/AddAPhoto';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "opaque"
  },
  margin: {
    gridColumnStart: 3,   
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function TripContainer(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  function handleClickOpen(trip) {
    props.setTripId(trip)
    setOpen(true);
  }

  function handleClose() {
    props.geoCode()
    setOpen(false);
  }

  function cancel() {
    setOpen(false);
  }
 


  const displayPost = props.trips.map((trip, index) => {
    return (
      <div className="card-grid-container">
        <div className='trip-heading'>
          <h3>{trip.title}</h3>
          <Button  className={classes.margin} size={"small"} color="primary" onClick={()=> handleClickOpen(trip.id)} >
            <AddAPhoto></AddAPhoto>
          </Button>
          <Dialog open={open} 
            onClose={cancel} 
            aria-labelledby="form-dialog-title"  
            aria-labelledby="simple-dialog-title"
            // BackdropProps={{
            //   classes: {root: classes.root}
            //   }
            // }>
            >
            <DialogTitle id="form-dialog-title">Add Your Picture</DialogTitle>
            <DialogContent>
              <DialogContentText>
               Input your picture info below:
              </DialogContentText>
              <TextField
                autoFocus
                onChange={props.updateFrom}
                margin="dense"
                name="title"
                label="Title"
                type="text"
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                onChange={props.updateFrom}
                name="img"
                label="Image"
                type="text"
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                onChange={props.updateFrom}
                name="description"
                label="Description"
                type="text"
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                onChange={props.updateFrom}
                name="place"
                label="Location"
                type="text"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={cancel} color="primary">
                Cancel
              </Button>
              <Button onClick={handleClose} color="primary" >
                Add Photo
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <AltCard key={index} trip={trip} pics={props.pics} selectTrip={props.selectTrip} />
      </div>
    )
  })

  return (
    <React.Fragment>
       {displayPost}
    </React.Fragment>
  )
}