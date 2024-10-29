import React, { useState, useEffect } from 'react';
import { getFirestore, collection, addDoc, onSnapshot, updateDoc, doc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase';
import './TodoApp.css';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'todos'), (snapshot) => {
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return; // Evita agregar tareas vacías
    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false
    });
    setInput('');
  };

  const toggleComplete = async (id, completed) => {
    const todoDoc = doc(db, 'todos', id);
    await updateDoc(todoDoc, { completed: !completed });
  };

  return (
    <div className="todo-container">
      <h1>TODO LIST</h1>
      <form onSubmit={addTodo}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            {todo.text}
            <button onClick={() => toggleComplete(todo.id, todo.completed)}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;