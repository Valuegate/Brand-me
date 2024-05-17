import { fetcher } from "@/lib/fetcher";
import { COURSES } from "@/services/routes";
import { useQuery } from "@tanstack/react-query";

interface iGetCourseResponse {
  
}

const useGetAllCourses = () => {
  const { isLoading, data, isError, isSuccess } = useQuery({
    queryKey: ["fetch-all-courses"],
    queryFn: async () => {
      try {
        const response = await fetcher(COURSES.GET_ALL, "GET");
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

export default useGetAllCourses;
