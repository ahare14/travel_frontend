// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Link from '@material-ui/core/Link';

// function NavBar() {
//   return (
//     <navbar className="navbar">
//       <Link href='/homepage'>
//         <Button>Home</Button>
//       </Link>
//       <Link href='/newtrip'>
//         <Button>Post</Button>
//       </Link>
//       <Button>Favorite Pictures</Button>
//       <Button>Trip Generator</Button>
//     </navbar>

//   )
// }

// export default NavBar ;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: '#5AAA95',
    position: 'fixed',
    width: "100%",
    zIndex: 900,
    marginTop: -10
  },
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
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
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

