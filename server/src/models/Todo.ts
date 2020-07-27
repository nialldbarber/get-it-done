import { model, Schema, Document, Types } from 'mongoose';

export const ObjectId = Types.ObjectId;

interface ITodo extends Document {
  id: string;
  content: string;
  createdAt: string;
  deadline: string;
  author: string;
}

const Todos = {
  id: { type: String },
  content: { type: String },
  createdAt: { type: String },
  deadline: { type: String },
  author: [ObjectId],
};

const todoSchema: Schema = new Schema(Todos);

const Todo = model<ITodo>('Todo', todoSchema);

export { Todo, Todos, ITodo };
