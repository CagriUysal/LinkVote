import compareFactory from "../helpers/utils/compareFactory";
import { ItemSchema } from "../api/schema";

// irrelavent properties initialized with dummy values

const toBeSortedByCreatedAtDesc: ItemSchema[] = [
  {
    uuid: "",
    name: "expected to be last",
    url: "",
    vote: 0,
    updatedAt: 0,
    createdAt: 0,
  },
  {
    uuid: "",
    name: "expected to be second",
    url: "",
    vote: 0,
    updatedAt: 0,
    createdAt: 1,
  },
  {
    uuid: "",
    name: "expected to be third",
    url: "",
    vote: 0,
    updatedAt: 0,
    createdAt: 1,
  },
  {
    uuid: "",
    name: "expected to be first",
    url: "",
    vote: 0,
    updatedAt: 0,
    createdAt: 2,
  },
];

const toBeSortedByVotesDesc: ItemSchema[] = [
  {
    uuid: "",
    name: "expected to be last",
    url: "",
    vote: 0,
    updatedAt: 0,
    createdAt: 0,
  },
  {
    uuid: "",
    name: "expected to be third",
    url: "",
    vote: 3,
    updatedAt: 1,
    createdAt: 0,
  },
  {
    uuid: "",
    name: "expected to be second",
    url: "",
    vote: 3,
    updatedAt: 2,
    createdAt: 0,
  },
  {
    uuid: "",
    name: "expected to be first",
    url: "",
    vote: 5,
    updatedAt: 0,
    createdAt: 0,
  },
];

const toBeSortedByVotesAsc: ItemSchema[] = [
  {
    uuid: "",
    name: "expected to be last",
    url: "",
    vote: 5,
    updatedAt: 0,
    createdAt: 0,
  },
  {
    uuid: "",
    name: "expected to be third",
    url: "",
    vote: 3,
    updatedAt: 1,
    createdAt: 0,
  },
  {
    uuid: "",
    name: "expected to be second",
    url: "",
    vote: 3,
    updatedAt: 2,
    createdAt: 0,
  },
  {
    uuid: "",
    name: "expected to be first",
    url: "",
    vote: 0,
    updatedAt: 0,
    createdAt: 0,
  },
];

test("Sorting by createdAt descending", () => {
  const compareFunction = compareFactory("createdAtDesc");

  const sortedArray = toBeSortedByCreatedAtDesc.sort(compareFunction);
  expect(sortedArray).toMatchObject([
    { name: "expected to be first" },
    { name: "expected to be second" },
    { name: "expected to be third" },
    { name: "expected to be last" },
  ]);
});

test("Sorting by votes descending", () => {
  const compareFunction = compareFactory("votesDesc");

  const sortedArray = toBeSortedByVotesDesc.sort(compareFunction);
  expect(sortedArray).toMatchObject([
    { name: "expected to be first" },
    { name: "expected to be second" },
    { name: "expected to be third" },
    { name: "expected to be last" },
  ]);
});

test("Sorting by votes descending", () => {
  const compareFunction = compareFactory("votesAsc");

  const sortedArray = toBeSortedByVotesAsc.sort(compareFunction);
  expect(sortedArray).toMatchObject([
    { name: "expected to be first" },
    { name: "expected to be second" },
    { name: "expected to be third" },
    { name: "expected to be last" },
  ]);
});
