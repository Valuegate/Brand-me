import axios from "axios";

import {baseUrl} from "@/services/base";


export function makePost(
  payload: string,
  token: string,
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) {
  axios({
    method: "POST",
    data: {
      content: payload,
    },
    url: `${baseUrl}/community/posts/`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then(onSuccess)
    .catch(onError);
}

export function likePost(
  postID: string | number,
  token: string,
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) {
  axios({
    method: "POST",
    data: {
      post: postID,
    },
    url: `${baseUrl}/community/likes/`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then(onSuccess)
    .catch(onError);
}


export function commentPost(
  postID: string | number,
  comment: string,
  token: string,
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) {
  axios({
    method: "POST",
    data: {
      post: postID,
      content: comment,
    },
    url: `${baseUrl}/community/comments/`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then(onSuccess)
    .catch(onError);
}


export function getPostComments(
  postID: string | number,
  token: string,
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) {
  axios({
    method: "GET",
    // data: {
    //   post: postID,
    // },
    url: `${baseUrl}/community/comments/`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then(onSuccess)
    .catch(onError);
}

