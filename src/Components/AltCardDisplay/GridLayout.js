import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 540,
    width: 340,
    textAlign: "center"
  },
  control: {
    padding: theme.spacing(3),
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '75%',
    maxHeight: '75%',
  },
}));

export default function GridLayout(props) {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const display = props.filteredPics.map(pic => {
    return (
      <Grid container justify="center" className={classes.control}>
        <Grid key={pic.id}  item>
          <Paper className={classes.paper} > 
            <img className={classes.img} src={pic.img_url} alt='' />
            <p>{pic.description}</p>
            <p>Location: {pic.longitude}, {pic.latitude}</p>
            <p>Like</p>
            <p>Favorite</p>
          </Paper>
        </Grid>
      </Grid>
    )
  })
  return (
    <React.Fragment>
      {display}
    </React.Fragment>
  );
}