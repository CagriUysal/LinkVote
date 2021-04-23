import React, { FunctionComponent, createContext } from "react";

import useData from "../hooks/useData";

export const DataContext = createContext<ReturnType<typeof useData>>([]);

const DataProvider: FunctionComponent = ({ children }) => {
  const [data, setData] = useData();

  return (
    <DataContext.Provider value={[data, setData]}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
