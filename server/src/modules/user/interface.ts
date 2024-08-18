import { Schema } from 'mongoose';

export type TProvider = 'CREDENTIALS' | 'GOOGLE';
export type TRole = 'SUPER_ADMIN' | 'ADMIN' | 'USER';

export type TUserName = {
  firstName: string;
  lastName: string;
};

export type TUser = {
  _id: Schema.Types.ObjectId;
  name: TUserName;
  email: string;
  password: string;
  provider: TProvider;
  role: TRole;
  image?: string;
  bio: string;
};
