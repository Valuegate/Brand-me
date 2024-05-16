import { fetcher } from "@/lib/fetcher";
import { ACCOUNTPROFILE_ROUTES } from "@/services/routes";
import { useQuery } from "@tanstack/react-query";

export interface iAccountProfileResponse {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  bio: string | "";
  location: string | "";
  date_joined: number | string;
  image: string | "";
}
const useFetchAccountProfile = () => {
  const { isLoading, data, isError, isSuccess } = useQuery({
    queryKey: ["fetch-accountprofile"],
    queryFn: async () => {
      try {
        const response = await fetcher(ACCOUNTPROFILE_ROUTES.ACCOUNT, "GET");
        return response?.data;
      } catch (err) {
        throw err;
      }
    },
  });

  return {
    isLoading,
    data: data as iAccountProfileResponse,
    isError,
    isSuccess,
  };
};

export default useFetchAccountProfile;
