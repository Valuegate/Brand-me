import { fetcher } from "@/lib/fetcher";
import { AUTH_ROUTES } from "@/services/routes";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

export type TCreateCoursePayload = {
  title: string;
  description: string;
  instructor: string;
  modules: TModule[];
};

export type TModule = {
  title: string;
  is_completed: boolean;
  contents: {
    title: string;
    text_content: string;
    video_content: File;
  }[];
};

export interface iCourseCreationResponse {}

export function createCourse(
  payload: TCreateCoursePayload,
  token: string,
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) {
  console.log(payload);
  axios({
    method: "POST",
    data: payload,
    url: `https://brandme-2.onrender.com/api/courses/courses/create/`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  })
    .then(onSuccess)
    .catch(onError);
}

const useCreateCourse = () => {
  const mutation = useMutation({
    mutationFn: async (payload: TCreateCoursePayload) => {
      try {
        const response = await fetcher(AUTH_ROUTES.LOGIN, "POST", payload);
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

export default useCreateCourse;
