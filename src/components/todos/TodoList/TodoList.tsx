// src/components/todos/TodoList.tsx
import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css'; // Importando o CSS

interface TodoListProps {
    todos: { title: string; description: string }[];
    onDelete: (index: number) => void;
    onEdit: (index: number, todo: { title: string; description: string }) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onEdit }) => {
    return (
        <ul className="todo-list">
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    onDelete={() => onDelete(index)}
                    onEdit={(updatedTodo: { title: string; description: string; }) => onEdit(index, updatedTodo)}
                />
            ))}
        </ul>
    );
};

export default TodoList;
