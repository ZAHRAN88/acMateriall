import { courseResources } from "./actions";

const CourseResources =(weeks:number[])=>{

    let totalResources =0 
    weeks.forEach(async (week) => {
        totalResources += await courseResources(week.toString()).then((resources) => resources);
    });
    return totalResources
}
export { CourseResources}