// src/components/targets/TargetItem.tsx
import React, { useState } from 'react';
import TargetForm from '../TargetForm/TargetForm';
import './TargetItem.css';

interface TargetItemProps {
    target: { name: string; description: string };
    onDelete: () => void;
    onEdit: (updatedTarget: { name: string; description: string }) => void;
}

const TargetItem: React.FC<TargetItemProps> = ({ target, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (updatedTarget: { name: string; description: string }) => {
        onEdit(updatedTarget);
        setIsEditing(false);
    };

    return (
        <li className="target-item">
            {isEditing ? (
                <TargetForm
            existingTarget={target}
            onEdit={handleEdit} onAdd={function (): void {
              throw new Error('Function not implemented.');
            } }                />
            ) : (
                <>
                    <h3>{target.name}</h3>
                    <p>{target.description}</p>
                    <button onClick={() => setIsEditing(true)}>Editar</button>
                    <button onClick={onDelete}>Excluir</button>
                </>
            )}
        </li>
    );
};

export default TargetItem;
