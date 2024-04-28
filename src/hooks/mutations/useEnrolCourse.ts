import { fetcher } from "@/lib/fetcher";
import { COURSES } from "@/services/routes";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export type TEnrolCoursePayload = {
  course_id: string | number
};

export interface iCourseCreationResponse {
  
}

const useEnrolCourse = () => {
  const mutation = useMutation({
    mutationFn: async (payload: TEnrolCoursePayload) => {
      try {
        const response = await fetcher(COURSES.ENROL, "POST", payload);
        return response.data;
      } catch (err) {
        throw err;
      }
    },
  });

  const { mutate, isError, isSuccess, isPending, error, data } = mutation;

  return {
    login: mutate,
    isLoading: isPending,
    isError,
    isSuccess,
    error: error as AxiosError,
    data: data as iCourseCreationResponse,
  };
};

export default useEnrolCourse;
