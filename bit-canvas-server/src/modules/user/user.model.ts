import { Schema, model } from 'mongoose';
import { UserNameType, UserType } from './user.interface';

const UserNameSubSchema = new Schema<UserNameType>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  { _id: false }
);

const UserSchema = new Schema<UserType>({
  name: UserNameSubSchema,
  email: { type: String, required: true },
  password: { type: String, required: true },
  bio: { type: String, default: '' },
  image: { type: String, default: '' },
  posts: [{ type: Schema.Types.ObjectId, ref: 'post' }],
  followers: [{ type: Schema.Types.ObjectId, ref: 'user' }],
  following: [{ type: Schema.Types.ObjectId, ref: 'user' }],
  shared: [{ type: Schema.Types.ObjectId, ref: 'post' }],
});

export const UserModel = model('user', UserSchema);
