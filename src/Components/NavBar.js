import React from 'react';
import logo3 from './Logo3.png'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Eject from '@material-ui/icons/Eject'
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

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
            <img style={{width: '200px', height: '90%', marginBottom:"-5px"}} src={logo3} alt='logo'  />
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
          <Tab label="Favorites" href="/favorites" />
          <Tab label="Trip Generator" href="/generator" /> 
        </Tabs>
        <Link href='/signin'>
          <Button style={{marginTop: '20px', marginLeft: '550px'}}>
            <Eject />
          </Button>
        </Link>

      </Paper>
    </React.Fragment>
  );
}

