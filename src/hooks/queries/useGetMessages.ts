import axios from "axios";

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
    url: `https://brandme-2.onrender.com/api/contactus/messages/`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(onSuccess)
    .catch(onError);
}
