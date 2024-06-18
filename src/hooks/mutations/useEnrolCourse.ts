import { fetcher } from "@/lib/fetcher";
import { COURSES } from "@/services/routes";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

import {baseUrl} from "@/services/base";

export type TEnrolCoursePayload = {
  course_id: string | number;
  user_id: string | number;
};

export interface iEnrollCourseResponse {}

const useEnrollCourse = () => {
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
    data: data as iEnrollCourseResponse,
  };
};

function enrollCourse(
  id: string | number,
  token: string,
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) {
  axios({
    method: "POST",
    url: `${baseUrl}/courses/courses/${id}/enroll/`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then(onSuccess)
    .catch(onError);
}

export default enrollCourse;
