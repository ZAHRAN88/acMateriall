import { addWeek } from '@/app/lib/actions'
import React from 'react'

interface AddWeekProps {
    // Define your prop types here
    courseID: string
    disabled?: boolean
}



const AddWeek: React.FC<AddWeekProps> = ({courseID,disabled}) => {
    
  return (
    <div>
      <div className="mt-3  w-[60%] m-auto rounded-full">
      <span className="font-medium text-lg text-slate-500">Add Week</span>

        <form action={addWeek}  className={`p-8 items-center rounded-md  flex-1 justify-between flex flex-col gap-8 bg-gray-200 ${disabled? " hidden":" "} `}>
          <input type="text" name="weekName" className="p-3 rounded-md w-full" placeholder="Week Name" />
          <input  type="text" name="courseId" hidden value={courseID} placeholder="course id" className="p-3 w-full rounded-md" />
          
          <button className="px-4 py-4 bg-black text-slate-100 rounded-md" type="submit">Add Week</button>
      </form>
      </div>
    </div>
  )
}

export default AddWeek
