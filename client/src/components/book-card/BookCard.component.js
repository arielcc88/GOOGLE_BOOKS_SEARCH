import React from "react";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
  }));

const conditionalActionRendering = (isSaved, book, handleRemoveBook, handleSaveBook) => {
  if(isSaved){
    return (
      <CardActions>
        <Link color="inherit" href={book.link} target="_blank" rel="noopener">
          <Button size="small" color="primary">
            View Info
          </Button>
        </Link>
        <Button size="small" color="primary" onClick={handleRemoveBook(book._id)}>
            Remove
        </Button>
      </CardActions>
    )
  }
  else{
    return (
      <CardActions>
        <Link color="inherit" href={book.link} target="_blank" rel="noopener">
          <Button size="small" color="primary">
            View Info
          </Button>
        </Link>
        <Button size="small" color="primary" onClick={handleSaveBook(book.id)}>
            Save
        </Button>
      </CardActions>
    )
  }
}

export default function BookCard(props) {
    const { book, isSaved, handleRemoveBook, handleSaveBook } = props;
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardMedia
                className={classes.cardMedia}
                // image="https://source.unsplash.com/random"
                image={book.image}
                title="Image title"
                />
                <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    {book.title}
                </Typography>
                {/* <Typography>
                    {book.description}
                </Typography> */}
                </CardContent>
                { conditionalActionRendering(isSaved, book, handleRemoveBook, handleSaveBook) }
            </Card>
        </Grid>
    );
}