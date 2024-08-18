import { Schema } from 'mongoose';

export type TUserName = {
  firstName: string;
  lastName: string;
};

export type TUser = {
  _id: Schema.Types.ObjectId;
  name: TUserName;
  email: string;
  password: string;
  image?: string;
  bio: string;
};
