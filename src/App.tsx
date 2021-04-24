import React, { FunctionComponent } from "react";
import { Router } from "@reach/router";
import CssBaseline from "@material-ui/core/CssBaseline";

import Home from "pages/Home";
import Add from "pages/Add";
import DataProvider from "helpers/context/dataContext";

const App: FunctionComponent = () => {
  return (
    <>
      <CssBaseline />
      <DataProvider>
        <Router>
          <Home path="/" />
          <Add path="/add" />
        </Router>
      </DataProvider>
    </>
  );
};

export default App;
