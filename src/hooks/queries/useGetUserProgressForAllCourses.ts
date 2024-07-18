import axios from "axios"
import { baseUrl } from "@/services/base";



export interface iGetCoursesUserProgressResponse {
  course_name: string;
  total_modules_in_course: number;
  total_modules_completed: number;
}

export default async function useGetAllUserProgressForCourses(token: string ) {

  const response = await axios.get(`${baseUrl}/courses/user-course-progress/`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }    
  })

  return response.data as iGetCoursesUserProgressResponse[];
}



