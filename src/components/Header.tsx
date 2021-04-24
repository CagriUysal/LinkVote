import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    width: "90%",
    margin: "0 auto",
    marginTop: "1em",
    borderBottom: "0.1em solid",
  },
  text: {
    fontSize: "2em",
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <Grid container justify="flex-end" className={classes.container}>
      <Grid item>
        <Grid container>
          <Typography className={classes.text} style={{ fontWeight: "bold" }}>
            Link
          </Typography>
          <Typography className={classes.text}>Vote</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
