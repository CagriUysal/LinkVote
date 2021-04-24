export interface ItemSchema {
  uuid: string;
  name: string;
  url: string;
  vote: number;
  createdAt: number;
  updatedAt: number;
}

export default interface DataSchema {
  [uuid: string]: ItemSchema;
}
