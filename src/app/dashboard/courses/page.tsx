import { SearchBar } from "@/app/components/SearchBar";
import { getCourses } from "@/app/lib/actions";
import Link from "next/link";

const coursesList = async () => {
  const courses = (await getCourses().then((courses) => courses)) || [];
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-white font-bold">Courses</h1>

        <div className="flex justify-center bg-white mt-3 rounded-lg w-[80%]  flex-wrap gap-4 items-start">
          {courses.map((course, courseIndex) => (
            <div className="mx-3 w-[clamp(100px,12rem,200px)]  max-h-[5rem] text-wrap text-center my-4">
              <Link href={`${course.id.toString()}`}>
                <div
                  key={courseIndex}
                  className="week-entry flex-1 px-5 py-5 flex flex-col gap-2 p-4 bg-slate-100 border rounded-lg"
                >
                  <h1 className=" truncate">{course.courseName}</h1>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default coursesList;
