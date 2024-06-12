import axios from "axios"


function getPosts(
  token: string,
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) {
  axios({
    method: "GET",
    url: `https://brandme-2.onrender.com/api/community/posts/`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then(onSuccess)
    .catch(onError);
}

export default getPosts;
