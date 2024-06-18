import axios from "axios"
import {baseUrl} from "@/services/base";

function getCourseById(
  id: string,
  token: string,
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) {
  axios({
    method: "GET",
    url: `${baseUrl}/courses/courses/${id}/`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then(onSuccess)
    .catch(onError);
}

export default getCourseById;
