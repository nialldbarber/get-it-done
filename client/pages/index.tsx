import React, { FC, useState } from 'react';
import Head from 'next/head';
import MainLayout from 'components/layout/MainLayout';
import Button from 'components/atomic/button';

interface Todos {
  id: number;
  title: string;
  completed: boolean;
}

const Home: FC = () => {
  const [input, setInput] = useState<string>('');
  const [todos, setTodos] = useState<Todos[]>([]);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: Math.random() * 10,
        title: input,
        completed: false,
      },
    ]);
    setInput('');
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello there</h1>
        <form onSubmit={addTodo}>
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
          <Button text="Add todo" />
        </form>
        {todos.map(({ id, title }) => (
          <div key={id}>
            <li>{title}</li>
            <Button text="Remove" action={() => removeTodo(id)} />
          </div>
        ))}
      </main>
      <footer></footer>
    </MainLayout>
  );
};

export default Home;
