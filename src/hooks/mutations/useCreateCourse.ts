import { fetcher } from "@/lib/fetcher";
import { AUTH_ROUTES } from "@/services/routes";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

export type TCreateCoursePayload = {
  title: string;
  description: string;
  instructor: string;
  banner: File;
  modules: TModule[];
};

export type TModule = {
  title: string;
  image: string;
  duration: string;
  is_completed: boolean;
  text_content: string;
  video_content: File;
};

export interface iCourseCreationResponse {}

export function createCourse(
  payload: TCreateCoursePayload,
  token: string,
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) {
  
  let form: FormData = new FormData();
  form.append("title", payload.title);
  form.append("description", payload.description);
  form.append("banner_content", payload.banner);
  form.append("instructor", payload.instructor);
  
  payload.modules.forEach((module, i) => {
    form.append(`modules[${i}].title`, module.title);
    form.append(`modules[${i}].is_completed`, module.is_completed.toString());
    form.append(`modules[${i}].text_content`, module.text_content);
    form.append(`modules[${i}].video_content`, module.video_content);
  });


  axios({
    method: "POST",
    data: form,
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
