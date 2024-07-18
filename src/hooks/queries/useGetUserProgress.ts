import axios from "axios"

import {baseUrl} from "@/services/base";

function getUserProgress(
  token: string,
  courseID: string,
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) {
  axios({
    method: "GET",
    url: `${baseUrl}/courses/user_progress/${courseID}/`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then(onSuccess)
    .catch(onError);
}

export default getUserProgress;
