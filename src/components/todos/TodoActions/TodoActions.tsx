
import React, { useState } from 'react';

interface TodoActionsProps {
  addTodo: (title: string) => void;
  editTodo: (id: number, title: string) => void;
}

const TodoActions: React.FC<TodoActionsProps> = ({ addTodo, editTodo }) => {
  const [title, setTitle] = useState('');
  const [editingTodoId, setEditingTodoId] = useState<number | null>(null);

  const handleAddOrEditTodo = () => {
    if (editingTodoId !== null) {
      editTodo(editingTodoId, title);
      setEditingTodoId(null);
    } else {
      addTodo(title);
    }
    setTitle('');
  };

  return (
    <div>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder={editingTodoId ? "Editar TODO" : "Adicionar TODO"} 
      />
      <button onClick={handleAddOrEditTodo}>
        {editingTodoId ? "Salvar" : "Adicionar"}
      </button>
    </div>
  );
};

export default TodoActions;