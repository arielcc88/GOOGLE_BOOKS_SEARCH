import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import BookCard from "../../components/book-card/BookCard.component";

// CSS for Search view home page
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  navLink: {
    padding: '20px'
  },
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
  noBooks: {
    marginTop: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Google Search Book App
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function SavedPage(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          {/* <Link color="inherit" href="/"> */}
            <MenuBookIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Google Books Search
            </Typography>
          {/* </Link> */}
          <Typography component="p" color="inherit" noWrap>
              <Link className={classes.navLink} color="inherit" href="/">Home</Link>
            </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Typography component="h1" variant="h4" align="left" color="textSecondary" gutterBottom>
            All Saved Books
          </Typography>
          <Grid container spacing={4}>
            { props.books.length > 0 ? 
            props.books.map((book, index) => (
              <BookCard key={index} book={book} isSaved={true} handleRemoveBook={props.handleRemoveBook}/>
            )) : 
            <Typography className={classes.noBooks} component="p" align="left" color="textSecondary">
              There are no saved books at the moment
            </Typography>}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}