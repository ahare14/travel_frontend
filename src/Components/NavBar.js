import React from 'react';
import logo from './logo.png'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    backgroundColor: '#5AAA95',
    position: 'fixed',
    width: "100%",
    zIndex: 900,
    marginTop: -10,
  
  },
  tab: {
    gridColumnStart: '2',
    marginTop: '15px'
  }
});

export default function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <React.Fragment>
      <Paper className={classes.root}>
          <div>
            <img style={{width: '200px', height: '80%', marginBottom:"-5px"}} src={logo} />
          </div>
        <Tabs
          className={classes.tab}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          centered
        >
          <Tab label="Home" href="/homepage" />
          <Tab label="Favorites" />
          <Tab label="Trip Generator" /> 
        </Tabs>
      </Paper>
    </React.Fragment>
  );
}

