import React from 'react';
import logo3 from './Logo3.png'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    color: 'secondary',
    width: "100%",
    zIndex: 900,
    marginTop: -10,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#5AAA95' }}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <MenuIcon style={{color: 'white'}}/>
            </Button>
            {/* <MenuIcon /> */}
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link href='/homepage'><MenuItem onClick={handleClose}>Homepage</MenuItem></Link>
              <Link href='/favorites'><MenuItem href='/favorites' onClick={handleClose}>Favorites</MenuItem></Link>
              <Link href='/generator'><MenuItem onClick={handleClose}>TripBuilder</MenuItem></Link>
            </Menu>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          <img style={{width: '200px', height: '90%', marginBottom:"-5px"}} src={logo3} alt='logo'  />
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
