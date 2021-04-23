import React, { FunctionComponent, useContext } from "react";
import { RouteComponentProps } from "@reach/router";

import { DataContext } from "../helpers/context/dataContext";

const Home: FunctionComponent<RouteComponentProps> = () => {
  const [data, setData] = useContext(DataContext);

  console.log(data);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
