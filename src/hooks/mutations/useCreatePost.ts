import { fetcher } from "@/lib/fetcher";
import { COURSES } from "@/services/routes";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";



export function makePost(
  payload: string,
  token: string,
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) {
  axios({
    method: "POST",
    data: {
      title: "Dummy Title",
      content: payload,
    },
    url: `https://brandme-2.onrender.com/api/community/posts/`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then(onSuccess)
    .catch(onError);
}

export function likePost(
  postID: string,
  token: string,
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) {
  axios({
    method: "POST",
    data: {
      post: postID,
    },
    url: `https://brandme-2.onrender.com/api/community/likes/`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then(onSuccess)
    .catch(onError);
}


