import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      display: "flex"
    },
  },
}));

export default function SearchFormComponent(props) {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    //set state
    e.preventDefault();
    e.stopPropagation();
    setSearchQuery(e.target.value);
  }

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={props.handleSubmit(searchQuery)}>
        <div className={classes.root}>
            <TextField
            id="b-title"
            label="Title"
            style={{ margin: 8 }}
            helperText="Type a book title and click Search..."
            fullWidth
            margin="normal"
            //value={props.searchQuery}
            onChange={handleInputChange}
            />
            <Button variant="contained" color="primary" onClick={props.handleSearchBook(searchQuery)}>
                Search
            </Button>
        </div>
    </form>
  );
}