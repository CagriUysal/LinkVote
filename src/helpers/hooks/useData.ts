import { useEffect, useState } from "react";

import { getDataFromLocal } from "../../api/storageWrapper";
import ISchema from "../../api/schema";

const useData = (): [
  ISchema[],
  React.Dispatch<React.SetStateAction<ISchema[]>>
] => {
  const [data, setData] = useState<ISchema[]>([]);

  useEffect(() => {
    const localData = getDataFromLocal();
    setData(localData);
  }, []);

  return [data, setData];
};

export default useData;
