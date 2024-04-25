import { fetcher } from "@/lib/fetcher";
import { USERSPROFILE_ROUTES } from "@/services/routes";
import { useQuery } from "@tanstack/react-query";

interface iUsersProfileResponse {
  
}
[];
const useFetchUsersProfile = () => {
  const { isLoading, data, isError, isSuccess } = useQuery({
    queryKey: ["fetch-userprofile"],
    queryFn: async () => {
      try {
        const response = await fetcher(USERSPROFILE_ROUTES.USERS, "GET");
        return response?.data;
      } catch (err) {
        throw err;
      }
    },
  });

  return {
    isLoading,
    data: data as iUsersProfileResponse,
    isError,
    isSuccess,
  };
};

export default useFetchUsersProfile;
