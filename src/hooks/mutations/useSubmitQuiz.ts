import axios from "axios";

import {baseUrl} from "@/services/base";

function submitQuiz(
  payload: any,
  token: string,
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) {
  axios({
    method: "POST",
    data: payload,
    url: `${baseUrl}/courses/submit-quiz/`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then(onSuccess)
    .catch(onError);
}

export default submitQuiz;
