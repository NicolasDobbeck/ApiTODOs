import React from 'react';
import TargetItem from '../TargetItem/TargetItem';
import './TargetList.css';

interface TargetListProps {
    targets: { name: string; description: string }[];
    onDelete: (index: number) => void;
    onEdit: (index: number, target: { name: string; description: string }) => void;
}

const TargetList: React.FC<TargetListProps> = ({ targets, onDelete, onEdit }) => {
    return (
        <ul className="target-list">
            {targets.map((target, index) => (
                <TargetItem
                    key={index}
                    target={target}
                    onDelete={() => onDelete(index)}
                    onEdit={(updatedTarget) => onEdit(index, updatedTarget)}
                />
            ))}
        </ul>
    );
};

export default TargetList;
