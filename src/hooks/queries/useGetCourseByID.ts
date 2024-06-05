import { fetcher } from "@/lib/fetcher";
import { COURSES } from "@/services/routes";
import { useQuery } from "@tanstack/react-query";

import axios from "axios"

interface iGetCourseResponse {}

const useGetCourseByID = (id: string) => {
  const { isLoading, data, isError, isSuccess } = useQuery({
    queryKey: ["fetch-course-by-id"],
    queryFn: async () => {
      try {
        const response = await fetcher(`${COURSES.GET_BY_ID}${id}/`, "GET");
        return response?.data;
      } catch (err) {
        throw err;
      }
    },
  });

  return {
    isLoading,
    data: data as iGetCourseResponse,
    isError,
    isSuccess,
  };
};

function getCourseById(
  id: string,
  token: string,
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) {
  axios({
    method: "GET",
    url: `https://brandme-2.onrender.com/api/courses/courses/${id}/`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then(onSuccess)
    .catch(onError);
}

export default getCourseById;
