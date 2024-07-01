import { addResource } from '@/app/lib/actions'
import React, { useActionState } from 'react'
import AlertSuccess from './Alert'
import { TextField } from '@mui/material'
import Spinner from '@/app/components/Spinner'

interface AddResourceProps {
    // Define your prop types here
    weekID: string
}

const AddResource:React.FC<AddResourceProps> = ({weekID}) => {

const [state,action, isPending]= useActionState(addResource, null)
  return (
    <div>
      <div className="mt-3  w-[60%] m-auto rounded-full">
        <span className=" font-medium text-lg text-slate-500">Add Week Resources</span>
        <form action={action}  className="p-8 items-center rounded-md  flex-1 justify-between flex flex-col gap-8 bg-gray-200 ">
          <TextField multiline className='p-3 rounded-md w-full' label="Resource Link" name='link' />
          <TextField multiline className='p-3 rounded-md w-full' label="Resource Label" name='text' />
          <TextField multiline className='p-3 rounded-md w-full' label="Resource Icon" name='icon' />
          
          <input  type="text" name="weekId" hidden value={weekID} placeholder="course id" className="p-3 w-full rounded-md" />
          
          <button disabled={isPending} className="px-4 py-4 bg-black text-slate-100 rounded-md" type="submit">
            
            
          
            {
              isPending?
              <Spinner label="Adding Resource" />
              :"Add Resource"
            }
            </button>
          {
            state==="Resource added successfully"&&
            <AlertSuccess label="Resource added successfully" />
          }
          

      </form>
      </div>
    </div>
  )
}

export default AddResource
