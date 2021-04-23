import React, { FunctionComponent } from "react";
import { Router } from "@reach/router";

import Home from "pages/Home";
import Add from "pages/Add";
import DataProvider from "helpers/context/dataContext";

const mockData = [
  {
    createdAt: new Date(),
    name: "Reddit",
    url: "https://reddit.com",
    vote: 5,
  },
  {
    createdAt: new Date(),
    name: "Hackernews",
    url: "https://news.ycombinator.com",
    vote: 10,
  },
  {
    createdAt: new Date(),
    name: "Twitter",
    url: "https://twitter.com",
    vote: 7,
  },
];

const App: FunctionComponent = () => {
  return (
    <DataProvider>
      <Router>
        <Home path="/" />
        <Add path="/add" />
      </Router>
    </DataProvider>
  );
};

export default App;
