import { model, Schema } from 'mongoose';
import { TArticle } from './interface';
import { articleStatuses } from './constants';

const articleSchema = new Schema<TArticle>(
  {
    authorId: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
    title: { type: String, required: true },
    content: { type: String, required: true },
    status: { type: String, enum: articleStatuses, default: 'DRAFT' },
    createdAt: { type: Date, default: new Date() },
  },
  { timestamps: true }
);

export const Article = model<TArticle>('article', articleSchema);
