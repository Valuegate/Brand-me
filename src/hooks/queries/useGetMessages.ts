import axios from "axios";
import {baseUrl} from "@/services/base";

export interface iMessage {
  username: string;
  email: string;
  message: string;
  date: Date;
}

export function getMessages(
  token: string,
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) {
  axios({
    method: "GET",
    url: `${baseUrl}/contactus/messages/`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(onSuccess)
    .catch(onError);
}
