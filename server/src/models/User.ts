import { model, Schema, Document } from 'mongoose';
import { Todos, ITodo, ObjectId } from './Todo';

export interface IUser extends Document {
  _doc: any;
  id: string;
  username: string;
  email: string;
  password: string;
  todos: ITodo[];
}

const userSchema: Schema = new Schema({
  id: { type: ObjectId, ref: 'Todo' },
  username: { type: String },
  email: { type: String },
  password: { type: String },
  todos: [Todos],
});

const User = model<IUser>('User', userSchema);

export { User };
