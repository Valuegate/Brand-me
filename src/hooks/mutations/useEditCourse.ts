import {baseUrl} from "@/services/base";
import { iMainCourse } from "@/stores/editStore";
import axios, { AxiosError } from "axios";


export function editCourse(
  payload: iMainCourse,
  token: string,
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) {

  let form: FormData = new FormData();
  form.append("title", payload.title);
  form.append("description", payload.description);
  form.append("banner_content", payload.banner_content);

  payload.modules.forEach((module, i) => {
    form.append(`modules[${i}].title`, module.title);
    form.append(`modules[${i}].is_completed`, module.is_completed.toString());
    form.append(`modules[${i}].text_content`, module.text_content);
    form.append(`modules[${i}].video_content`, module.video_content);
  });

  form.append(`quizzes[0].title`, payload.quizzes[0].title);
  form.append(`quizzes[0].description`, payload.quizzes[0].description);

  payload.quizzes[0].questions.forEach((que, i) => {
    form.append(`quizzes[0].questions[${i}].text`, que.text);
    que.choices.map((ans, index) => {
      form.append(`quizzes[0].questions[${i}].choices[${index}].text`, ans.text);
      form.append(`quizzes[0].questions[${i}].choices[${index}]is_correct`, ans.is_correct.toString());
    });
    
  });

  axios({
    method: "PUT",
    data: form,
    url: `${baseUrl}/courses/courses/${payload.id}/edit/`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  })
    .then(onSuccess)
    .catch(onError);
}
