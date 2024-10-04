// src/pages/TodoPage.tsx
import React, { useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import TodoList from '../components/todos/TodoList/TodoList';
import TodoForm from '../components/todos/TodoForm/TodoForm';

const TodoPage: React.FC = () => {
    const [todos, setTodos] = useState<{ title: string; description: string }[]>([]);

    const handleAddTodo = (todo: { title: string; description: string }) => {
        setTodos((prevTodos) => [...prevTodos, todo]);
    };

    const handleDeleteTodo = (index: number) => {
        setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
    };

    const handleEditTodo = (index: number, updatedTodo: { title: string; description: string }) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo, i) => (i === index ? updatedTodo : todo))
        );
    };

    return (
        <div className="todo-page">
            <NavBar />
            <h1>Todos</h1>
            <TodoForm onAdd={handleAddTodo} />
            <TodoList todos={todos} onDelete={handleDeleteTodo} onEdit={handleEditTodo} />
        </div>
    );
};

export default TodoPage;
