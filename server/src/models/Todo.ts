import { model, Schema, Document } from 'mongoose';

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
  author: { type: String },
};

const TodoSchema: Schema = new Schema({ Todos });

const Todo = model<ITodo>('Todo', TodoSchema);

export { Todo, Todos, ITodo };
