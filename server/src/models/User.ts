import { model, Schema, Document } from 'mongoose';
import { Todos, ITodo } from './Todo';

interface IUser extends Document {
  id: string;
  name: string;
  todos: ITodo[];
}

const UserSchema: Schema = new Schema({
  id: { type: String },
  name: { type: String },
  todos: [Todos],
});

const User = model<IUser>('User', UserSchema);

export { User };
