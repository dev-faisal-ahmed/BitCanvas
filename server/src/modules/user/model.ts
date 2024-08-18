import { Schema, model } from 'mongoose';
import { TUser, TUserName } from './interface';
import { providers, userRoles } from './constants';

const userNameSubSchema = new Schema<TUserName>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  { _id: false }
);

const userSchema = new Schema<TUser>(
  {
    name: { type: userNameSubSchema, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    provider: { type: String, enum: providers, default: 'CREDENTIALS' },
    role: { type: String, enum: userRoles, default: 'USER' },
    bio: { type: String, default: '' },
    image: { type: String, default: '' },
  },
  { timestamps: true }
);

export const User = model('user', userSchema);
