import { ItemSchema } from "../../api/schema";

export type compareTypes = "createdAtDesc" | "votesDesc" | "votesAsc";

export default function compareFactory(compareMethod: compareTypes) {
  if (compareMethod === "createdAtDesc") {
    return (item1: ItemSchema, item2: ItemSchema) =>
      item2.createdAt - item1.createdAt;
  }

  if (compareMethod === "votesAsc") {
    return (item1: ItemSchema, item2: ItemSchema) => {
      const byVote = item1.vote - item2.vote;
      if (byVote !== 0) return byVote;

      return item2.updatedAt - item1.updatedAt;
    };
  }

  if (compareMethod === "votesDesc") {
    return (item1: ItemSchema, item2: ItemSchema) => {
      const byVote = item2.vote - item1.vote;
      if (byVote !== 0) return byVote;

      return item2.updatedAt - item1.updatedAt;
    };
  }

  throw new Error(`${compareMethod} as compareMethod not allowed`);
}
