// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     height: 540,
//     width: 240,
//     textAlign: "center"
//   },
//   control: {
//     padding: theme.spacing(3),
//   },
//   img: {
//     margin: 'auto',
//     display: 'block',
//     maxWidth: '75%',
//     maxHeight: '75%',
//   },
// }));

// export default function GridLayout(props) {
//   const [spacing, setSpacing] = React.useState(2);
//   const classes = useStyles();

//   const display = props.filteredPics.map(pic => {
//     return (
//       <div className="card-grid-item">
//         <img src={pic.img_url} alt=''></img>
//         <p>{pic.description}</p>
//         <p>Location: {pic.longitude}, {pic.latitude}</p>
//         <p>Like</p>
//         <p>Favorite</p>
//       </div>
//     )
//   })
//   return (
//     <React.Fragment>
//       {display}
//     </React.Fragment>
//   );
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
// import tileData from './tileData';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    // transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function GridLayout(props) {
  const classes = useStyles();



  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {props.filteredPics.map(tile => (
          <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1} onClick={props.selectTrip} >
            <img src={tile.img_url} alt={`${tile.latitude},${tile.longitude}` }/>
            <GridListTileBar
              title={tile.description}
              titlePosition="top"
              actionIcon={
                <IconButton aria-label={`star ${tile.description}`} className={classes.icon} onClick={props.handleClick}>
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}


