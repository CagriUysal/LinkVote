import React, { FunctionComponent, useContext, useState } from "react";
import { RouteComponentProps } from "@reach/router";

import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

import { DataContext } from "../helpers/context/dataContext";
import AddLink from "../components/AddLink";
import LinkItem from "../components/LinkItem";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles({
  container: {
    width: "30%",
    margin: "0 auto",
  },
});

const Home: FunctionComponent<RouteComponentProps> = () => {
  const classes = useStyles();
  const [data] = useContext(DataContext);

  const [toastOpen, setToastOpen] = useState(false);
  const [deletedName, setDeletedName] = useState("");

  const handleClose = () => setToastOpen(false);
  const onItemDelete = (name: string) => {
    setToastOpen(true);
    setDeletedName(name);
  };

  return (
    <>
      <Grid container direction="column" className={classes.container}>
        <AddLink />

        <Divider />

        {Object.values(data).map((item) => (
          <LinkItem key={item.name} item={item} onItemDelete={onItemDelete} />
        ))}
      </Grid>

      {/* toast */}
      <Snackbar open={toastOpen} onClose={handleClose} autoHideDuration={2000}>
        <Alert variant="filled" severity="success">
          {`${deletedName} deleted`}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Home;
