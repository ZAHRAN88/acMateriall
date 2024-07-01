'use server';

import { revalidatePath } from 'next/cache';
import prisma from './db';

const addUser = async (formData: FormData) => {
    await prisma.user.create({
        data: {
            email: formData.get('email') as string,
            name: formData.get('name') as string
        }
    })

}
const createPost = async (formData: FormData) => {
    await prisma.post.create({
        data: {
            title: formData.get('title') as string,
            content: formData.get('content') as string,
            authorId: parseInt(formData.get('authorId') as string)
        }
    })

}
type CourseState = "Course added successfully" | "Error adding course"| null;


const addCourse = async (state: CourseState, formData: FormData): Promise<CourseState> => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 2000)); 
        await prisma.course.create({
            data: {
                courseName: formData.get('courseName') as string,
                playlist: formData.get('list1') as string,
                playlist2: formData.get('list2') as string,
                drive: formData.get('drive') as string,
                importantNotes: formData.get('importantNotes') as string,
                semester: formData.get('semesterNumber') as string,
            }
        });

        return "Course added successfully";
    } catch (error) {
        console.error(error);
        return "Error adding course";
    }
};
    
const addWeek = async (formData: FormData) => {
    await prisma.week.create({
        data: {
            weekName: formData.get('weekName') as string,
            courseId: parseInt(formData.get('courseId') as string)
        }
    })
}
type ResourceState = "Resource added successfully" | "Error adding resource" | null;
const addResource = async (state:ResourceState ,formData: FormData):Promise<ResourceState> => {
    try{
        await new Promise((resolve) => setTimeout(resolve, 2000)); 
        await prisma.resource.create({
            data: {
                icon: formData.get('icon') as string,
                text: formData.get('text') as string,
                link: formData.get('link') as string,
                weekId: parseInt(formData.get('weekId') as string)
            }
        })
        revalidatePath(`/dashboard/${formData.get('weekId') as string}`)
        return "Resource added successfully";
    }catch(e){
        return "Error adding resource";
    }
  
}
const getCourse = async (id: number) => {
    return await prisma.course.findUnique({
        where: {
            id: id
        }
    })

}
const getCourses = async () => {
    return await prisma.course.findMany({})
}
const getWeeks = async (courseId: string) => {
    return await prisma.week.findMany({
        where: {
            courseId: Number(courseId)
        }
    });

}
const getResources = async (weekId: string) => {

    return await prisma.resource.findMany({
        where: {
            weekId: parseInt(weekId)
        }
    });
}
async function updateResource(formData: FormData) {
    await prisma.resource.update({
        where: {
            id: parseInt(formData.get('id') as string)
        },
        data: {
            text: formData.get('text') as string,
            link: formData.get('link') as string,
        }
    })
    revalidatePath(`/dashboard/${formData.get('id') as string}`)
}
const deleteResource = async (id: string) => {
    await prisma.resource.delete({
        where: {
            id: parseInt(id)
        }
    })
    revalidatePath(`/dashboard/${id}`)
}
const getSemesterCourses = async (semester: string) => {
    return await prisma.course.findMany({
        where: {
            semester: semester
        }
    })
}
const courseWeeks = async (courseId: string) => {
    return await prisma.week.count({
        where: {
            courseId: parseInt(courseId)
        }
    })
}
// resources count for all weeks in a course
const courseResources = async (courseId: string) => {
    const weeks = await prisma.week.findMany({
        where: {
            courseId: parseInt(courseId)
        }
    });

    let totalResources = 0;
    for (const week of weeks) {
        const resources = await prisma.resource.count({
            where: {
                weekId: week.id
            }
        });
        totalResources += resources;
    }

    return totalResources;
}

export { addUser, getResources, createPost, addCourse, addWeek, addResource, getWeeks, getCourse, getCourses, updateResource, deleteResource, getSemesterCourses, courseResources }