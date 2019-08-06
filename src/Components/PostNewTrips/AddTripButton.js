import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import LibraryAdd from '@material-ui/icons/LibraryAdd'
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';


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

export default function AddTripButton(props) {

  const [open, setOpen] = React.useState(false);

  function handleClickOpen(trip) {
    setOpen(true);
  }

  function handleClose() {
    props.addTrip()
    setOpen(false);
  }

  function cancel() {
    setOpen(false);
  }

  return (
    <div>
      <Fab style={{position: 'fixed', marginLeft: '-25px', marginRight:'-25px'}}color="secondary" aria-label="add" onClick={handleClickOpen} >
        <LibraryAdd />
      </Fab>
      <Dialog open={open} 
        onClose={cancel} 
        aria-labelledby="simple-dialog-title"
        >
        <DialogTitle id="form-dialog-title">Add a New Trip</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            onChange={props.updateForm}
            margin="dense"
            name="tripTitle"
            label="Title"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={cancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" >
            Add Trip
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}