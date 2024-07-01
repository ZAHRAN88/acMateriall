"use client"
import React, { useActionState, useEffect, useRef } from "react";
import Modal from "react-modal";
import { Button } from "@mui/material";
import { gsap } from "gsap";
import { X } from "lucide-react";
import Spinner from "./Spinner"; // Ensure this component is defined
import AlertSuccess from "../dashboard/components/Alert";
import { addResource } from "../lib/actions";
import ResourceForm from "./Formy";

interface ResourceModalProps {
    id: string;
    isOpen: boolean;
    closeModal: () => void;
}

const ResourceModal: React.FC<ResourceModalProps> = ({ id, isOpen, closeModal }) => {
    const [state, action, isPending] = useActionState(addResource, null);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && modalRef.current) {
            gsap.fromTo(
                modalRef.current,
                { opacity: 0, y: -50 },
                { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
            );
        }
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen && modalRef.current) {
            gsap.to(modalRef.current, {
                opacity: 0,
                y: -50,
                duration: 0.5,
                ease: "power2.in",
                onComplete: closeModal,
            });
        }
    }, [isOpen, closeModal]);

    return (
        <>
            <div className="modal-container">
                <Modal
                    isOpen={isOpen}
                    onRequestClose={closeModal}
                    className="modal relative"
                    overlayClassName="overlay"
                    ariaHideApp={false}
                >
                    <Button onClick={closeModal} className="absolute top-10 left-[90%]">
                        <X size={20} color="red" />
                    </Button>
                    <div ref={modalRef}>
                        <ResourceForm heading="Add New Resource" id={id} action={action} isPending={isPending} state={state} />
                    </div>
                </Modal>
            </div>
           
        </>
    );
};

export default ResourceModal;
