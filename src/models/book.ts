import mongoose, { Document, Schema } from 'mongoose';

export interface IBook extends Document {
  title: string;
  author: string;
  publishedDate: Date;
  isbn: string;
  coverImage?: string;
}

const bookSchema: Schema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedDate: { type: Date, required: true },
  isbn: { type: String, required: true },
  coverImage: { type: String },
});

export default mongoose.model<IBook>('Book', bookSchema);
