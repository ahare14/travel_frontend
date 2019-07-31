// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
// import Room from '@material-ui/icons/Room';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import PhotoAlbum from '@material-ui/icons/PhotoAlbum';

// const useStyles = makeStyles(theme => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
// }));

// export default function InputWithIcon() {
//   const classes = useStyles();

//   return (
//     <div>
//       <form>
//         <h1>Create a New Trip</h1>
//         <div className={classes.margin}>
//           <Grid container spacing={1} alignItems="flex-end">
//             <Grid item>
//              <PhotoAlbum/>
//             </Grid>
//             <Grid item>
//               <TextField id="input-with-icon-grid" label="Trip Title" />
//             </Grid>
//           </Grid>
//         </div>
//         <div className={classes.margin}>
//           <Grid container spacing={1} alignItems="flex-end">
//             <Grid item>
//              <PhotoAlbum/>
//             </Grid>
//             <Grid item>
//               <TextField id="input-with-icon-grid" label="Trip Title" />
//             </Grid>
//           </Grid>
//         </div>
//         <input type='submit' />
//       </form>
//     </div>
//   );
// }

import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
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
  const classes = useStyles();

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
      <Fab style={{position: 'fixed', marginLeft: '50px'}}color="secondary" aria-label="add" onClick={handleClickOpen} >
        <LibraryAdd />
      </Fab>
      <Dialog open={open} 
        onClose={cancel} 
        aria-labelledby="form-dialog-title"  
        aria-labelledby="simple-dialog-title"
        // BackdropProps={{
        //   classes: {root: classes.root}
        //   }
        // }>
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