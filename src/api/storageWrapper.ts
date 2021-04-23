// TODO: make wrapper functions async?
import ISchema from "./schema";

export const getDataFromLocal = (): ISchema[] => {
  const key = process.env.REACT_APP_STORAGE_KEY;
  if (key === undefined) {
    throw new Error("Please set 'REACT_APP_STORAGE_KEY' enviroment variable.");
  }

  const dataString = localStorage.getItem(key);

  return dataString ? JSON.parse(dataString) : [];
};

export const setDataToLocal = (data: ISchema[]) => {
  const key = process.env.REACT_APP_STORAGE_KEY;
  if (key === undefined) {
    throw new Error("Please set 'REACT_APP_STORAGE_KEY' enviroment variable.");
  }

  localStorage.setItem(key, JSON.stringify(data));
};
