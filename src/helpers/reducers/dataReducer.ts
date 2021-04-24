import { v4 as uuidv4 } from "uuid";

import DataSchema from "../../api/schema";

// avaliable actions types
export const INIT = "INIT";
export const ADD = "ADD";
export const DELETE = "DELETE_ITEM";
export const UPVOTE = "UPVOTE";
export const DOWNVOTE = "DOWNVOTE";

export type ACTION_TYPE =
  | { type: typeof INIT; payload: { data: DataSchema } }
  | { type: typeof ADD; payload: { name: string; url: string } }
  | { type: typeof DELETE; payload: { uuid: string } }
  | { type: typeof UPVOTE; payload: { uuid: string } }
  | { type: typeof DOWNVOTE; payload: { uuid: string } };

const reducer = (state: DataSchema, action: ACTION_TYPE): DataSchema => {
  const { type, payload } = action;

  if (type === INIT) {
    const { data } = payload as { data: DataSchema };

    return { ...data };
  }

  if (type === ADD) {
    const { name, url } = payload as { name: string; url: string };

    const uuid = uuidv4();
    const newItem: DataSchema = {
      [uuid]: {
        uuid,
        createdAt: new Date(),
        name,
        url,
        vote: 0,
        updatedAt: new Date(),
      },
    };

    return { ...state, ...newItem };
  }

  if (type === DELETE) {
    const { uuid } = payload as { uuid: string };

    const newState = { ...state };
    delete newState[uuid];

    return newState;
  }

  if (type === UPVOTE) {
    const { uuid } = payload as { uuid: string };

    const targetItem = state[uuid];
    targetItem.vote += 1;
    targetItem.updatedAt = new Date();

    return { ...state, [uuid]: targetItem };
  }

  if (type === DOWNVOTE) {
    const { uuid } = payload as { uuid: string };

    const targetItem = state[uuid];

    if (targetItem.vote === 0) return state;

    targetItem.vote -= 1;
    targetItem.updatedAt = new Date();

    return { ...state, [uuid]: targetItem };
  }

  return state;
};

export default reducer;
