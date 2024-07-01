"use client"
import React from "react";
import { TextField } from "@mui/material";
import Spinner from "./Spinner"; // Ensure this component is defined
import AlertSuccess from "../dashboard/components/Alert";

interface ResourceFormProps {
    id: string;
    action: any;
    isPending: boolean;
    state: any;
    heading: string;
}

const ResourceForm: React.FC<ResourceFormProps> = ({ id, action, isPending, state,heading }) => {
    return (
        <>
       
        <form
            action={action}
            className="p-8 items-center rounded-md flex-1  focus:outline-none outline-none justify-between flex flex-col gap-8 bg-gray-200"
        >
        <p className="font-medium text-lg">
            {heading}
        </p>
            <TextField
                multiline
                className="p-3 rounded-md w-full"
                label="Resource Link"
                name="link"
            />
            <TextField
                multiline
                className="p-3 rounded-md w-full"
                label="Resource Label"
                name="text"
            />
            <TextField
                multiline
                className="p-3 rounded-md w-full"
                label="Resource Icon"
                name="icon"
            />

            <input
                type="text"
                name="weekId"
                hidden
                value={id}
                placeholder="course id"
                className="p-3 w-full rounded-md"
            />

            <button
                disabled={isPending}
                className="px-4 py-4 bg-black text-slate-100 rounded-md"
                type="submit"
            >
                {isPending ? <Spinner label="Adding Resource" /> : "Add Resource"}
            </button>
            {state === "Resource added successfully" && (
                <AlertSuccess label="Resource added successfully" />
            )}
        </form>
        </>
    );
};

export default ResourceForm;
