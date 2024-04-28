import { fetcher } from "@/lib/fetcher";
import { QUIZ } from "@/services/routes";
import { useQuery } from "@tanstack/react-query";

interface iGetCourseResponse {}


const useGetQuizForCourse = (id: string) => {
  const { isLoading, data, isError, isSuccess } = useQuery({
    queryKey: ["fetch-quiz-for-course"],
    queryFn: async () => {
      try {
        const response = await fetcher(`${QUIZ.GET_FOR_COURSE}${id}/`, "GET");
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

export default useGetQuizForCourse;
