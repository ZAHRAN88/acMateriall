import { getSemesterCourses } from "@/app/lib/actions";
import Link from "next/link";


const page = async ({ params }: { params: { semester: string } }) => {
  const courses = await getSemesterCourses(params.semester).then(
    (courses) => courses
  );
  return (
    <div className="flex flex-col font-medium items-center justify-center gap-8 text-white">

    <h2>Courses List</h2>
    <div className="bg-white flex flex-col gap-3 rounded-lg h-[clamp(200px,100px,850px)] text-black p-5 w-[60%]">
      {courses.map((course) => {
        return (
            <div className="bg-slate-100 rounded-md  p-4">
              <Link href={`/course/${course.id}`}> 
            <div>
              <h1>{course.courseName}</h1>
              
            </div>
            </Link>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default page;
