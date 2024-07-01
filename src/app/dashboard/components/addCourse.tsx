"use client";
import { addCourse } from "@/app/lib/actions";
import React, { useActionState, useState } from "react";
import AddWeek from "./addWeek";
import { Alert, TextField } from "@mui/material";
import { stat } from "fs";
import AlertSuccess from "./Alert";

const AddCourse = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  
  console.time("useActionState");
  const [state, action, isPending] = useActionState(addCourse, null);
  console.timeEnd("useActionState");

  const handleFormSubmit = () => {
    setIsFormSubmitted(true);
  };

  return (
    <>
      <div className=" p-5 flex flex-col items-center justify-between gap-4">
        <h1 className="font-medium text-white text-lg">Create Course</h1>
        <form
          action={action}
          className="p-8 w-[60%] flex-1 items-center justify-between flex flex-col gap-8 bg-gray-100 rounded-lg shadow-md"
          onSubmit={handleFormSubmit}
        >
          <TextField
            className=" w-full p-3 "
            id="outlined-multiline-flexible"
            label="Semester Number"
            multiline
            maxRows={4}
            name="semesterNumber"
          />
          <TextField
            type="text"
            name="courseName"
            className="w-full p-3"
            label="Course Name"
            multiline

          />
          <TextField
            type="text"
            name="list1"
            className=" w-full p-3"
            label="Playlist 1"
            multiline

          />
          <TextField
            type="text"
            name="list2"
            className=" w-full p-3"
            label="Playlist 2"
            multiline

          />
          <TextField
            type="text"
            name="drive"
            className=" w-full p-3"
            label="Drive Link"
            multiline

          />
          <TextField
            name="importantNotes"
            className=" w-full   p-3"
            maxRows={10}
            label="Important Notes"
            multiline

          />

          {
            <button
              className="px-4 py-4 bg-black text-slate-100 rounded-md"
              type="submit"
              disabled={isPending}
            >
              {isPending ? (
                <div className="flex items-center gap-4 justify-center">
                  <p>Adding Course</p>
                  <div className="loader">
                    <div
                      className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                      role="status"
                    ></div>
                  </div>
                </div>
              ) : (
                "Add Course"
              )}
              
            </button>
          }
          {
            state === "Course added successfully" &&
           <AlertSuccess label="Course added successfully"/>
            
           
          }
          {state === "Error adding course" && (
            <Alert severity="error">Error adding course</Alert>
          )}
        </form>
      </div>
    </>
  );
};

export default AddCourse;
