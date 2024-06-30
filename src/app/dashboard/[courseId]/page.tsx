

import AddResourceBtn from '@/app/components/AddResourceBtn'
import EditButton from '@/app/components/EditButton'
import { getCourse, getResources, getWeeks, updateResource ,addResource } from '@/app/lib/actions'
import { Edit2Icon, Plus, PlusCircle, PlusIcon } from 'lucide-react'

import React from 'react'

const page = async ({ params }: { params: { courseId: string } }) => {

  const course = await getCourse(Number(params.courseId))
  const weeks = await getWeeks(params.courseId)
  

 

  return (
    <div className='bg-white w-[60%] sm:w-[80%] p-5 m-auto rounded-md flex-wrap overflow-hidden h-full '>
      <div className='flex flex-col gap-8  items-center justify-center'>
        <div className=''>
          <h2 className='font-semibold text-lg '>
            {course?.courseName}
          </h2>
        </div>
        <div className='flex items-center justify-center gap-8'>
               
               <a className='underline bg-blue-500 px-5 py-2 text-white  rounded-lg ' href={course?.playlist}>Play List</a>
                <a className='underline bg-blue-500 px-5 py-2 text-white  rounded-lg ' href={course?.playlist2}>Section Records</a>

              
        </div>

      </div>
      <div className='flex flex-col w-full gap-4'>
        <h2 className='font-semibold text-lg text-center mt-4'>Weeks</h2>
        <div className='flex flex-col w-full gap-4'>
          {weeks?.map((week, index) => (
            <div key={index} className='flex flex-col w-full items-start gap-4'>
              <div className='flex items-center justify-between gap-12'>
               
              <p>{week.weekName} </p>
              <div title='Add Resource'>
                <AddResourceBtn  weekId={week.id.toString()} />
              
              </div>
              </div>
              <div className=' p-2 rounded-lg w-full'>
                <ul className='flex flex-col gap-2 w-full'>
                {
                  getResources(week.id.toString()).then((resources) => {
                    return resources.map((resource, index) => (
                      <li key={index} className='flex  bg-slate-100 p-5 rounded-md gap-8 w-full justify-between'>
                        
                        <a href={resource.link}>{resource.text}</a>
                        <input hidden type="text"  />
                     
                        <EditButton text={resource.text} link={resource.link} id={resource.id.toString()} />
                      </li>
                    ))
                  })
                }
              </ul>
              </div>
              
              
            </div>
          ))}
        </div>

    </div>
    </div>
  )
}

export default page
