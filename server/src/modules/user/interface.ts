import { Schema } from 'mongoose';

export type TProvider = 'CREDENTIALS' | 'GOOGLE';

export type TUserName = {
  firstName: string;
  lastName: string;
};

export type TUser = {
  _id: Schema.Types.ObjectId;
  provider: TProvider;
  name: TUserName;
  email: string;
  password: string;
  image?: string;
  bio: string;
};
