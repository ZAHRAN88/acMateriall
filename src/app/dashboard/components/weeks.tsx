import { getResources, getWeeks } from '@/app/lib/actions'
import React from 'react'

const weeks =async () => {
  const  weeks = await getWeeks("1")

  return (
    <div>
      <div>
      <h1>Get Weeks</h1>
      {weeks.map((week, weekIndex) => (
        <div key={weekIndex} className="week-entry flex flex-col gap-2 p-4 bg-white border rounded-lg">
          <h1>{week.weekName}</h1>
          <h1>Resources</h1>
          {
            getResources(week.id.toString()).then((resources)=>resources.map((resource, resourceIndex) => (
              <div key={resourceIndex} className="week-entry flex flex-col gap-2 p-4 bg-white border rounded-lg">
               
               <a href={resource.link}>
                 <h1>{resource.text}</h1>
               </a>
                
              </div>
            ))
            )
          }
          
        </div>
      ))}
      </div>
    </div>
  )
}

export default weeks
