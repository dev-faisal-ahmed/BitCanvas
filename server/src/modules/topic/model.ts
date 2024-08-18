import { model, Schema } from 'mongoose';
import { TTopic } from './interface';

const topicSchema = new Schema<TTopic>({
  createdBy: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
  name: { type: String, required: true, unique: true },
});

export const Topic = model<TTopic>('topic', topicSchema);
