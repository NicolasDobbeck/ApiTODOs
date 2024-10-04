// src/components/todos/TodoForm.tsx
import React, { useState, useEffect } from 'react';
import './TodoForm.css';

interface TodoFormProps {
    onAdd: (todo: { title: string; description: string }) => void;
    existingTodo?: { title: string; description: string }; // Para edição
    onEdit?: (todo: { title: string; description: string }) => void; // Função para edição
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd, existingTodo, onEdit }) => {
    const [title, setTitle] = useState<string>(existingTodo?.title || '');
    const [description, setDescription] = useState<string>(existingTodo?.description || '');

    useEffect(() => {
        if (existingTodo) {
            setTitle(existingTodo.title);
            setDescription(existingTodo.description);
        }
    }, [existingTodo]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onEdit) {
            onEdit({ title, description });
        } else {
            onAdd({ title, description });
        }
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <label>
                Título do TODO
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </label>
            <label>
                Descrição do TODO
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </label>
            <button type="submit">{existingTodo ? 'Editar TODO' : 'Adicionar TODO'}</button>
        </form>
    );
};

export default TodoForm;
