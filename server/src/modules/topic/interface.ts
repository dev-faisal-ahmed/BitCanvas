import { Schema } from 'mongoose';

export type TTopic = {
  _id: Schema.Types.ObjectId;
  createdBy: Schema.Types.ObjectId;
  name: string;
  isDeleted: boolean;
};
