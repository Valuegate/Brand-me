import axios from "axios";


function completeModule(
  id: string | number,
  token: string,
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) {
  axios({
    method: "POST",
    url: `https://brandme-2.onrender.com/api/courses/modules/${id}/complete/`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then(onSuccess)
    .catch(onError);
}

export default completeModule;
