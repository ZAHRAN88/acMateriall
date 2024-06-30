import React, { useState } from 'react';
    import Modal from 'react-modal';
    import { addResource } from '../lib/actions';

    interface Props {
        id: string;
    }

    const ResourceModal: React.FC<Props> = ({ id }) => {
        const [isOpen, setIsOpen] = useState(false);

        const openModal = () => {
            setIsOpen(true);
        };

        const closeModal = () => {
            setIsOpen(false);
        };

        return (
            <>
                <button onClick={openModal}>Open Form</button>
                <Modal
                    isOpen={isOpen}
                    onRequestClose={closeModal}
                    className='modal'
                    overlayClassName='overlay'
                >
                    <form className='flex p-3 w-[60%] mx-auto my-3  bg-slate-200 rounded-lg flex-col gap-5 items-center justify-center' action={addResource}>
                        <input className='p-4 w-full rounded-md' type="text" name='text' placeholder='text' />
                        <input className='p-4 w-full rounded-md' type="text" name='link' placeholder='link' />
                        <input className='p-4 w-full rounded-md' type="text" name='icon' placeholder='secret' />
                        <input className='p-4 w-full rounded-md' type="text" hidden value={id} name='weekId' />
                        <button type='submit'>Add Resource</button>
                    </form>
                </Modal>
            </>
        );
    };

    export default ResourceModal;