// src/pages/TargetPage.tsx
import React, { useState } from 'react';
import TargetList from '../components/targets/TargetList/TargetList';
import TargetForm from '../components/targets/TargetForm/TargetForm';
import NavBar from '../components/NavBar/NavBar';

const TargetPage: React.FC = () => {
    const [targets, setTargets] = useState<{ name: string; description: string }[]>([]);

    const handleAddTarget = (target: { name: string; description: string }) => {
        setTargets((prevTargets) => [...prevTargets, target]);
    };

    const handleDeleteTarget = (index: number) => {
        setTargets((prevTargets) => prevTargets.filter((_, i) => i !== index));
    };

    const handleEditTarget = (index: number, updatedTarget: { name: string; description: string }) => {
        setTargets((prevTargets) =>
            prevTargets.map((target, i) => (i === index ? updatedTarget : target))
        );
    };

    return (
        <div className="target-page">
            <NavBar />
            <h1>Targets</h1>
            <TargetForm onAdd={handleAddTarget} />
            <TargetList targets={targets} onDelete={handleDeleteTarget} onEdit={handleEditTarget} />
        </div>
    );
};

export default TargetPage;
