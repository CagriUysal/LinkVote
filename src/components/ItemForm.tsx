import React, { useState, useContext } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles } from "@material-ui/core/styles";

import { DataContext } from "../helpers/context/dataContext";
import { ADD } from "../helpers/reducers/dataReducer";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  button: {
    width: "30%",
    alignSelf: "center",
  },
}));

const ItemForm = () => {
  const [_, dispatch] = useContext(DataContext);
  const classes = useStyles();

  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [toastOpen, setToastOpen] = useState(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUrl(event.target.value);

  const handleClick = () => {
    dispatch({ type: ADD, payload: { name, url } });
    setToastOpen(true);
  };

  const handleClose = () => setToastOpen(false);

  return (
    <>
      <Grid container item direction="column" component="form">
        <TextField
          label="name"
          variant="outlined"
          className={classes.textField}
          value={name}
          onChange={handleNameChange}
        />

        <TextField
          label="url"
          variant="outlined"
          className={classes.textField}
          value={url}
          onChange={handleUrlChange}
        />

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleClick}
          style={{ marginTop: "2em" }}
        >
          add
        </Button>
      </Grid>

      {/* toast */}
      <Snackbar open={toastOpen} onClose={handleClose} autoHideDuration={2000}>
        <Alert variant="filled" severity="success">
          {`${name} added`}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ItemForm;
