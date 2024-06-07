import axios from "axios";

function submitQuiz(
  payload: any,
  token: string,
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) {
  axios({
    method: "POST",
    data: payload,
    url: `https://brandme-2.onrender.com/api/courses/submit-quiz/`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then(onSuccess)
    .catch(onError);
}

export default submitQuiz;
