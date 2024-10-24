import axios from "axios";

import { baseUrl } from "@/services/base";

function completeModule(
  id: string | number,
  token: string,
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) {
  axios({
    method: "POST",
    url: `${baseUrl}/courses/modules/${id}/complete/`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then(onSuccess)
    .catch(onError);
}

export default completeModule;
