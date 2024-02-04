import { Types } from 'mongoose';

export type UserNameType = {
  firstName: string;
  lastName: string;
};

export type UserType = {
  _id: Types.ObjectId;
  name: UserNameType;
  email: string;
  password: string;
  image: string;
  bio: string;
  posts: Types.ObjectId[];
  shared: Types.ObjectId[];
  followers: Types.ObjectId[];
  following: Types.ObjectId[];
};
