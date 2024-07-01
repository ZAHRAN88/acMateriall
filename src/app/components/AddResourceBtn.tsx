'use client'
import { PlusCircle } from 'lucide-react'
import React from 'react'
import ResourceModal from './ResourceModal';

interface Props {
    weekId: string;
}

const AddResourceBtn: React.FC<Props> = ({ weekId }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className='flex justify-between items-center'>
            <div onClick={openModal}>
                <PlusCircle size={15} />
            </div>
            {isOpen && <ResourceModal id={weekId} isOpen={isOpen} closeModal={closeModal} />}
        </div>
    );
}

export default AddResourceBtn;
