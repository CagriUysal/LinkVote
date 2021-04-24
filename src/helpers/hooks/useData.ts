import { useEffect, useState } from "react";

import { getDataFromLocal } from "../../api/storageWrapper";
import ISchema from "../../api/schema";

const mockData = [
  {
    createdAt: new Date(),
    name: "Reddit",
    url: "https://reddit.com",
    vote: 5,
    updatedAt: new Date(),
  },
  {
    createdAt: new Date(),
    name: "Hackernews",
    url: "https://news.ycombinator.com",
    vote: 10,
    updatedAt: new Date(),
  },
  {
    createdAt: new Date(),
    name: "Twitter",
    url: "https://twitter.com",
    vote: 7,
    updatedAt: new Date(),
  },
];

const useData = (): [
  ISchema[],
  React.Dispatch<React.SetStateAction<ISchema[]>>
] => {
  const [data, setData] = useState<ISchema[]>([]);

  useEffect(() => {
    setData(mockData);
  }, []);

  return [data, setData];
};

export default useData;
