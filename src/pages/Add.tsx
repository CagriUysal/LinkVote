import React, { FunctionComponent } from "react";
import { RouteComponentProps, Link } from "@reach/router";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import StyledLink from "@material-ui/core/Link";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { makeStyles } from "@material-ui/core/styles";

import ItemForm from "../components/ItemForm";

const useStyles = makeStyles({
  container: {
    width: "30%",
    margin: "0 auto",
  },
  text: {
    textTransform: "capitalize",
  },
});

const Add: FunctionComponent<RouteComponentProps> = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.container}>
      <StyledLink component={Link} to="/">
        <ArrowBackIcon fontSize="small" /> Return to List
      </StyledLink>

      <Typography variant="h4" component="h1" className={classes.text}>
        add new link
      </Typography>

      <ItemForm />
    </Grid>
  );
};

export default Add;
