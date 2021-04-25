import React, { FunctionComponent } from "react";
import { Router } from "@reach/router";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

import Home from "pages/Home";
import Add from "pages/Add";
import DataProvider from "helpers/context/dataContext";
import theme from "theme/theme";

const App: FunctionComponent = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <DataProvider>
          <Router>
            <Home path="/" />
            <Add path="/add" />
          </Router>
        </DataProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
