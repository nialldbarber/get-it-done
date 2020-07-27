import { model, Schema, Document } from 'mongoose';

interface ITodo extends Document {
  content: string;
  createdAt: string;
  deadline: string;
  author: string;
}

const Todos = {
  content: { type: String },
  createdAt: { type: String },
  deadline: { type: String },
  username: { type: String },
  email: { type: String },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
};

const todoSchema: Schema = new Schema(Todos);

const Todo = model<ITodo>('Todo', todoSchema);

export { Todo, Todos, ITodo };
