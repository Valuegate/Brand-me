import {baseUrl} from "@/services/base";
import axios, { AxiosError } from "axios";

export type TEditProfilePayload = {
  first_name: string;
  last_name: string;
  location: string;
  bio: string;
  image: File | string | null;
};


export function editProfile(
  payload: TEditProfilePayload,
  token: string,
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) {
  axios({
    method: "PUT",
    data: payload,
    url: `${baseUrl}/accounts/profile/`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  })
    .then(onSuccess)
    .catch(onError);
}


export default editProfile;
