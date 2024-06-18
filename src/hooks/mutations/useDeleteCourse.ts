import axios, { AxiosError } from "axios";

import {baseUrl} from "@/services/base";

export function useDeleteCourse(
  payload: string | number,
  token: string,
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) {
  

  axios({
    method: "DELETE",
    url: `${baseUrl}/courses/courses/${payload}/delete/`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  })
    .then(onSuccess)
    .catch(onError);
}

