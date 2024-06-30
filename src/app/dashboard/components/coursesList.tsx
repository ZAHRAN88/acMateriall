import { getCourses } from '@/app/lib/actions'
import { Link } from 'lucide-react'
import React from 'react'

const coursesList = async() => {
  const courses= await getCourses().then((courses)=>courses)
    return (
    <div>
      
        <div>
        <h1>Courses</h1>
        {courses.map((course, courseIndex) => (
            <Link href={`dashboard/${course.id.toString()}`}>
            <div key={courseIndex} className="week-entry flex flex-col gap-2 p-4 bg-white border rounded-lg">
            <h1>{course.courseName}</h1>
            
            
            </div>
            </Link>

        ))}
        </div>
    </div>
  )
}

export default coursesList
