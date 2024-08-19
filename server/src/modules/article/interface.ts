import { Schema } from 'mongoose';

export type TArticleStatus = 'PUBLISHED' | 'DRAFT';
export type TArticle = {
  _id: Schema.Types.ObjectId;
  authorId: Schema.Types.ObjectId;
  title: string;
  content: string;
  createdAt: Date;
  status: TArticleStatus;
};
