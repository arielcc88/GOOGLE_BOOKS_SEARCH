import React from 'react';
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

export default function ComposedTextField() {
  const [name, setName] = React.useState();
  const classes = useStyles();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
        <div className={classes.root}>
            <TextField
            id="b-title"
            label="Title"
            style={{ margin: 8 }}
            helperText="Type a book title and click Search..."
            fullWidth
            margin="normal"
            value={name}
            onChange={handleChange}
            />
            <Button variant="contained" color="primary">
                Search
            </Button>
        </div>
    </form>
  );
}