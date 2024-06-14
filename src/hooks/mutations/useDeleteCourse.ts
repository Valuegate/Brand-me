import axios, { AxiosError } from "axios";


export function useDeleteCourse(
  payload: string | number,
  token: string,
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) {
  

  axios({
    method: "DELETE",
    url: `https://brandme-2.onrender.com/api/courses/courses/${payload}/delete/`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  })
    .then(onSuccess)
    .catch(onError);
}

