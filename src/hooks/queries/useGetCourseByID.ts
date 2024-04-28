import { fetcher } from "@/lib/fetcher";
import { COURSES } from "@/services/routes";
import { useQuery } from "@tanstack/react-query";

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

export default useGetCourseByID;
