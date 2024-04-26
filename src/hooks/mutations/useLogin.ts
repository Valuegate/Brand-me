import { fetcher, formFetcher } from "@/lib/fetcher";
import { AUTH_ROUTES } from "@/services/routes";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export type TLoginPayload = { email: string; password: string; };

export interface iDataResponse {
    access_token: string;
    email : string;
    full_name: string;
    refresh_token: string;
}

const useLogin = () => {
  const mutation = useMutation({
    mutationFn: async (payload: TLoginPayload) => {
      try {
        const response = await fetcher(AUTH_ROUTES.LOGIN, "POST", payload);
        return response.data;
      } catch (err) {
        throw err;
      }
    },
  });

  const { mutate, isError, isSuccess, isPending, error, data } = mutation;

  return {
    login: mutate,
    isLoading: isPending,
    isError,
    isSuccess,
    error: error as AxiosError,
    data: data as iDataResponse,
  };
};

export default useLogin;
