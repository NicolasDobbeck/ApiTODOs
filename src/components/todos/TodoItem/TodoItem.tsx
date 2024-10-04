// src/components/todos/TodoItem.tsx
import React, { useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import './TodoItem.css';

interface TodoItemProps {
    todo: { title: string; description: string };
    onDelete: () => void;
    onEdit: (updatedTodo: { title: string; description: string }) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (updatedTodo: { title: string; description: string }) => {
        onEdit(updatedTodo);
        setIsEditing(false);
    };

    return (
        <li className="todo-item">
            {isEditing ? (
                <TodoForm
            existingTodo={todo}
            onEdit={handleEdit} onAdd={function (): void {
              throw new Error('Function not implemented.');
            } }                />
            ) : (
                <>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                    <button onClick={() => setIsEditing(true)}>Editar</button>
                    <button onClick={onDelete}>Excluir</button>
                </>
            )}
        </li>
    );
};

export default TodoItem;