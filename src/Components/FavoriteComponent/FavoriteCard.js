import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: 350,
    margin: '10px',
    height: 300,
  },
  media: {
    height: 140,
  },
});

export default function FavoriteCard(props) {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.favorite.img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.favorite.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary"  onClick={() => props.delete(props.favorite.id)}>
            <DeleteIcon />
          </Button>
          <Button size="small" color="primary" name='location' onClick={() => props.handleClick(props.favorite.location)}>
            Visit!
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}
