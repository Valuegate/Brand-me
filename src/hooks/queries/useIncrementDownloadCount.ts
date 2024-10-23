import axios from "axios";
import { baseUrl } from "@/services/base";

function incrementDownloadCount(token: string, onSuccess: (res: any) => void) {
  axios({
    method: "GET",
    url: `${baseUrl}/courses/courses/pdf`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then(onSuccess);
}

export default incrementDownloadCount;
