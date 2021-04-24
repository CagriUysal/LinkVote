import DataSchema from "api/schema";
import React, {
  FunctionComponent,
  createContext,
  useReducer,
  useEffect,
} from "react";

import { setDataToLocal, getDataFromLocal } from "../../api/storageWrapper";
import reducer, { INIT, ACTION_TYPE } from "../reducers/dataReducer";

export const DataContext = createContext(
  ([] as unknown) as [DataSchema, React.Dispatch<ACTION_TYPE>]
);

const DataProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    const data = getDataFromLocal();
    dispatch({ type: INIT, payload: { data } });
  }, []);

  // save the data to local storage when user descided to leave the page
  window.onbeforeunload = () => {
    setDataToLocal(state);
  };

  return (
    <DataContext.Provider value={[state, dispatch]}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
