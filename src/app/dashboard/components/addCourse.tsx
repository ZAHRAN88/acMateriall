"use client";
import { addCourse } from "@/app/lib/actions";
import React, { useState } from "react";
import AddWeek from "./addWeek";
import { TextField } from "@mui/material";

const AddCourse = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    // Perform form submission logic here
    // If the form submission is successful, set isFormSubmitted to true
    setIsFormSubmitted(true);
  };

  return (
    <>
      <div className=" p-5 flex flex-col items-center justify-between gap-4">
        <h1 className="font-medium text-white text-lg">Create Course</h1>
        <form
          action={addCourse}
          className="p-8 w-[60%] flex-1 items-center justify-between flex flex-col gap-8 bg-gray-100 rounded-lg shadow-md"
          onSubmit={handleFormSubmit}
        >
         {/*  <input
            type="text"
            className=" w-full p-3"
            placeholder="Semester Number"
          /> */}
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
           
          />
          <TextField
            type="text"
            name="list1"
            className=" w-full p-3"
            label="Playlist 1"
          />
          <TextField
            type="text"
            name="list2"
            className=" w-full p-3"
           label="Playlist 2"
          />
          <TextField
            type="text"
            name="drive"
            className=" w-full p-3"
            label="Drive Link"
          />
          <TextField
            name="importantNotes"
            className=" w-full   p-3"
            
            maxRows={10}
            label="Important Notes"
          />
          <button
            className="px-4 py-4 bg-black text-slate-100 rounded-md"
            type="submit"
          >
            Add Course
          </button>
        </form>
      </div>
    </>
  );
};

export default AddCourse;
