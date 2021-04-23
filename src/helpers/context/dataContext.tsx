import React, { FunctionComponent, createContext } from "react";

import useData from "../hooks/useData";
import { setDataToLocal } from "../../api/storageWrapper";

export const DataContext = createContext(
  ([] as unknown) as ReturnType<typeof useData>
);

const DataProvider: FunctionComponent = ({ children }) => {
  // TODO: change useData to reducer.
  const [data, setData] = useData();

  // save the data to local storage when user descided to leave the page
  window.onbeforeunload = () => {
    setDataToLocal(data);
  };

  return (
    <DataContext.Provider value={[data, setData]}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
