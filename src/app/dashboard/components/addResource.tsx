import { addResource } from '@/app/lib/actions'
import React from 'react'

interface AddResourceProps {
    // Define your prop types here
    weekID: string
}
const AddResource:React.FC<AddResourceProps> = ({weekID}) => {
  return (
    <div>
      <div className="mt-3  w-[60%] m-auto rounded-full">
        <span className=" font-medium text-lg text-slate-500">Add Week Resources</span>
        <form action={addResource}  className="p-8 items-center rounded-md  flex-1 justify-between flex flex-col gap-8 bg-gray-200 ">
          <input type="text" name="link" className="p-3 rounded-md w-full" placeholder="Resource Link" />
          <input type="text" name="text" className="p-3 rounded-md w-full" placeholder="Resource label" />
          <input type="text" name="icon" className="p-3 rounded-md w-full" placeholder="Resource Icon" />
          <input  type="text" name="weekId" hidden value={weekID} placeholder="course id" className="p-3 w-full rounded-md" />
          
          <button className="px-4 py-4 bg-black text-slate-100 rounded-md" type="submit">Add Resource</button>
      </form>
      </div>
    </div>
  )
}

export default AddResource
