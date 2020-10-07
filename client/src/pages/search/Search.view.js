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
import SearchForm from "../../components/search-form/SearchForm.component";
import BookCard from "../../components/book-card/BookCard.component";
import { getLastBooks } from "../../utils/helpers";

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
  navLink: {
    padding: '20px'
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

function RenderBookCard(books, displayRecentSaved, handleRemoveBook, handleSaveBook){
  const classes = useStyles();
  if(books.length > 0){
    if(displayRecentSaved){
      return (getLastBooks(books, 5).map((book, index) => (
        <BookCard key={index} book={book} isSaved={displayRecentSaved} handleRemoveBook={handleRemoveBook} handleSaveBook={handleSaveBook} />
      )))
    }
    else{
      return (books.map((book, index) => (
        <BookCard key={index} book={book} isSaved={displayRecentSaved} handleRemoveBook={handleRemoveBook} handleSaveBook={handleSaveBook} />
      )))
    }
  }
  else
  {
    return (
      <Typography className={classes.noBooks} component="p" align="left" color="textSecondary">
        There are no saved books at the moment
      </Typography>
    )
  }
}


export default function HomePage(props) {
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
              <Link className={classes.navLink} color="inherit" href="/saved">Saved Books</Link>
            </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Search a book!
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                A web application to help you find information about any book - using the powerful
                Google Books API.
                Type it, Find it, Save it.
            </Typography>
            <Grid container spacing={5} justify="center">
              <Grid item xs={12}>
                <SearchForm 
                  handleSearchBook={props.handleSearchBook} 
                />
              </Grid>
          </Grid>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {props.displayRecentSaved ? 
            (<Typography component="h1" variant="h4" align="left" color="textSecondary" gutterBottom>
              Recently Saved Books
            </Typography>) :
            <Typography component="h1" variant="h4" align="left" color="textSecondary" gutterBottom>
              Search Results
            </Typography>
          }
          <Grid container spacing={4}>
            {RenderBookCard(props.books, props.displayRecentSaved, props.handleRemoveBook, props.handleSaveBook)}
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