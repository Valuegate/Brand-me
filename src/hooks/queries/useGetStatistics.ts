import axios from "axios"

import {baseUrl} from "@/services/base";
function getStatistics(
  token: string,
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) {
  axios({
    method: "GET",
    url: `${baseUrl}/accounts/statistics/`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then(onSuccess)
    .catch(onError);
}

export default getStatistics;
