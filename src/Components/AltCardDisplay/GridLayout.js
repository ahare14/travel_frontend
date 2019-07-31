import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

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

export default function GridLayout(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {props.filteredPics.map((tile, index) => (
          <GridListTile 
            key={tile.img} 
            cols={tile.featured ? 2 : 1} 
            rows={tile.featured ? 2 : 1} 
            onClick={() => props.selectTrip(tile.latitude, tile.longitude)} >
            <img src={tile.img_url} alt={index}/>
            <GridListTileBar
              title={tile.description}
              titlePosition="top"
              actionIcon={
                <IconButton 
                  aria-label={`star ${tile.description}`} 
                  className={classes.icon} 
                  onClick={() => props.addToFavorites(tile)} >
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


