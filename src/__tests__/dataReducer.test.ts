import reducer, {
  INIT,
  DELETE,
  UPVOTE,
  DOWNVOTE,
  ADD,
} from "../helpers/reducers/dataReducer";

/** NOTE: Changing mock data would break the tests */
const hackernewsUUID = "9fbdacac-599a-4ea9-b962-14bcabc46dcf";
const hackernewsData = {
  uuid: hackernewsUUID,
  name: "hackernews",
  url: "https://news.ycombinator.com",
  vote: 9,
  createdAt: 0,
  updatedAt: 0,
};

const redditUUID = "49c1a1dd-37fb-40ca-b421-a6b1f5c1eb44";
const redditData = {
  uuid: redditUUID,
  name: "reddit",
  url: "https://reddit.com",
  vote: 0,
  createdAt: 0,
  updatedAt: 0,
};

const mockData = {
  [hackernewsUUID]: hackernewsData,
  [redditUUID]: redditData,
};

test("initiliazes empty state", () => {
  expect(reducer({}, { type: INIT, payload: { data: mockData } })).toEqual(
    mockData
  );
});

test("deletes item", () => {
  expect(
    reducer(mockData, {
      type: DELETE,
      payload: { uuid: hackernewsUUID },
    })
  ).toEqual({ [redditUUID]: redditData });
});

test("upvoting item increases vote number by 1", () => {
  const newState = reducer(mockData, {
    type: UPVOTE,
    payload: { uuid: hackernewsUUID },
  });

  const newVote = newState[hackernewsUUID].vote;
  expect(newVote).toBe(hackernewsData.vote + 1);
});

test("upvoting item updates `updatedAt` property", () => {
  const newState = reducer(mockData, {
    type: UPVOTE,
    payload: { uuid: hackernewsUUID },
  });

  const newUpdatedAt = newState[hackernewsUUID].updatedAt;
  expect(newUpdatedAt).toBeGreaterThan(hackernewsData.updatedAt);
});

test("downvoting item decreases vote number by 1", () => {
  const newState = reducer(mockData, {
    type: DOWNVOTE,
    payload: { uuid: hackernewsUUID },
  });

  const newVote = newState[hackernewsUUID].vote;
  expect(newVote).toBe(hackernewsData.vote - 1);
});

test("downvoting item updates `updatedAt` property", () => {
  const newState = reducer(mockData, {
    type: DOWNVOTE,
    payload: { uuid: hackernewsUUID },
  });

  const newUpdatedAt = newState[hackernewsUUID].updatedAt;
  expect(newUpdatedAt).toBeGreaterThan(hackernewsData.updatedAt);
});

test("downvoting below zero not allowed", () => {
  const newState = reducer(mockData, {
    type: DOWNVOTE,
    payload: { uuid: redditUUID },
  });

  const newVote = newState[redditUUID].vote;
  expect(newVote).toBe(0);
});

test("adding item creates new UUID key", () => {
  const newState = reducer(mockData, {
    type: ADD,
    payload: { name: "example", url: "https://example.com" },
  });

  expect(Object.keys(newState).length).toBe(Object.keys(mockData).length + 1);
  expect(() => {
    const uuid4Regex = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
    Object.keys(newState).forEach((key) => {
      if (key.match(uuid4Regex) === null) throw new Error("No match");
    });
  }).not.toThrow();
});

test("addding creates item with correct initial values", () => {
  const payload = { name: "example", url: "https://example.com" };
  const newState = reducer(mockData, {
    type: ADD,
    payload,
  });

  const [newItemUUID] = Object.keys(newState).filter(
    (key) => ![hackernewsUUID, redditUUID].includes(key)
  );

  expect(newState[newItemUUID]).toEqual(
    expect.objectContaining({
      name: payload.name,
      url: payload.url,
      vote: 0,
      uuid: newItemUUID,
    })
  );
});
