import React, { FunctionComponent } from "react";
import { RouteComponentProps, Link } from "@reach/router";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import StyledLink from "@material-ui/core/Link";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { makeStyles } from "@material-ui/core/styles";

import ItemForm from "../components/ItemForm";
import Header from "../components/Header";

const useStyles = makeStyles({
  container: {
    width: "35%",
    minWidth: "300px",
    margin: "0 auto",
    "& > *": {
      marginTop: "1em",
    },
  },
  text: {
    textTransform: "capitalize",
  },
});

const Add: FunctionComponent<RouteComponentProps> = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Grid container direction="column" className={classes.container}>
        <StyledLink component={Link} to="/">
          <Grid container>
            <ArrowBackIcon fontSize="small" />
            <Typography style={{ marginLeft: "0.5em" }}>
              Return to List
            </Typography>
          </Grid>
        </StyledLink>

        <Typography variant="h4" component="h1" className={classes.text}>
          add new link
        </Typography>

        <ItemForm />
      </Grid>
    </>
  );
};

export default Add;
