import { useEffect, useState } from "react";

import { getData } from "../../api/storageWrapper";
import ISchema from "../../api/schema";

const useData = () => {
  const [data, setData] = useState<ISchema[]>([]);

  useEffect(() => {
    const localData = getData();
    setData(localData);
  }, []);

  return [data, setData];
};

export default useData;
