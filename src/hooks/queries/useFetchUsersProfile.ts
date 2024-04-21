import { fetcher } from "@/lib/fetcher";
import { USERSPROFILE_ROUTES } from "@/services/routes";
import { useQuery } from "@tanstack/react-query";

interface iUsersProfileResponse {
  email: string;
  full_name: string;
  phone_number: number | string;
  address: string;
  image: string;
  password: string;
  about_seller: string;
  is_staff: boolean;
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
