import React, { useState, useEffect } from 'react';
import './TargetForm.css';

interface TargetFormProps {
    onAdd: (target: { name: string; description: string }) => void;
    existingTarget?: { name: string; description: string }; // Para edição
    onEdit?: (target: { name: string; description: string }) => void; // Função para edição
}

const TargetForm: React.FC<TargetFormProps> = ({ onAdd, existingTarget, onEdit }) => {
    const [name, setName] = useState<string>(existingTarget?.name || '');
    const [description, setDescription] = useState<string>(existingTarget?.description || '');

    useEffect(() => {
        if (existingTarget) {
            setName(existingTarget.name);
            setDescription(existingTarget.description);
        }
    }, [existingTarget]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onEdit) {
            onEdit({ name, description });
        } else {
            onAdd({ name, description });
        }
        setName('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="target-form">
            <label>
                Nome do Target
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            <label>
                Descrição do Target
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </label>
            <button type="submit">{existingTarget ? 'Editar Target' : 'Adicionar Target'}</button>
        </form>
    );
};

export default TargetForm;