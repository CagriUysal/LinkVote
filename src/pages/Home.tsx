import React, { FunctionComponent, useContext } from "react";
import { RouteComponentProps } from "@reach/router";

import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

import { DataContext } from "../helpers/context/dataContext";
import AddLink from "../components/AddLink";
import LinkItem from "../components/LinkItem";

const useStyles = makeStyles({
  container: {
    width: "30%",
    margin: "0 auto",
  },
});

const Home: FunctionComponent<RouteComponentProps> = () => {
  const classes = useStyles();
  const [data] = useContext(DataContext);

  console.log(data);

  return (
    <Grid container direction="column" className={classes.container}>
      <AddLink />

      <Divider />

      {data.map((item) => (
        <LinkItem key={item.name} item={item} />
      ))}
    </Grid>
  );
};

export default Home;
