// TargetActions.tsx
import React, { useState } from 'react';

interface TargetActionsProps {
  addTarget: (title: string) => void;
  editTarget: (id: number, title: string) => void;
}

const TargetActions: React.FC<TargetActionsProps> = ({ addTarget, editTarget }) => {
  const [title, setTitle] = useState('');
  const [editingTargetId, setEditingTargetId] = useState<number | null>(null);

  const handleAddOrEditTarget = () => {
    if (editingTargetId !== null) {
      editTarget(editingTargetId, title);
      setEditingTargetId(null); // Limpa a edição após o salvamento
    } else {
      addTarget(title);
    }
    setTitle(''); // Limpar o campo após adicionar ou editar
  };

  return (
    <div>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder={editingTargetId ? "Editar Target" : "Adicionar Target"} 
      />
      <button onClick={handleAddOrEditTarget}>
        {editingTargetId ? "Salvar" : "Adicionar"}
      </button>
    </div>
  );
};

export default TargetActions;