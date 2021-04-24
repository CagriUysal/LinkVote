import React from "react";
import { Link } from "@reach/router";

import Grid from "@material-ui/core/Grid";
import AddBoxIcon from "@material-ui/icons/AddBox";
import StyledLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "1em",
    borderRadius: "1em",
    "&:hover": {
      backgroundColor: theme.palette.grey[200],
    },
  },
  addItemText: {
    textTransform: "uppercase",
    fontSize: "2em",
    fontWeight: "bold",
  },
  addItemIcon: {
    fontSize: "5em",
  },
}));

const AddLink = () => {
  const classes = useStyles();

  return (
    <StyledLink component={Link} to="/add">
      <Grid
        container
        alignItems="center"
        justify="space-around"
        wrap="nowrap"
        className={classes.container}
      >
        <AddBoxIcon className={classes.addItemIcon} />
        <Typography className={classes.addItemText}>submit a link</Typography>
      </Grid>
    </StyledLink>
  );
};

export default AddLink;
