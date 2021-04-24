export interface ItemSchema {
  uuid: string;
  createdAt: Date;
  name: string;
  url: string;
  vote: number;
  updatedAt: Date;
}

export default interface DataSchema {
  [uuid: string]: ItemSchema;
}
