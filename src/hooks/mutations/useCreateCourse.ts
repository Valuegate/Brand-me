import { fetcher } from "@/lib/fetcher";
import { AUTH_ROUTES } from "@/services/routes";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export type TCreateCoursePayload = {
  title: string;
  description: string;
  instructor: string;
  modules: TModule[];
};

export type TModule = {
  title: string;
  text_content: string;
  video_content: File;
}


export interface iCourseCreationResponse {
  
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
