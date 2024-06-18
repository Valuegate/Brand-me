import { fetcher, formFetcher } from "@/lib/fetcher";
import { ACCOUNTREGISTER_ROUTES } from "@/services/routes";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import {baseUrl} from "@/services/base";
export type TSignupPayload = { email: string; password: string; first_name: string; last_name: string;  };

interface iDataResponse {
    email : string;
    first_name : string;
    last_name: string;
    password: string;
}

const useUserRegister = () => {
  const mutation = useMutation({
    mutationFn: async (payload: TSignupPayload) => {
      try {
        const response = await fetcher(`${baseUrl}${ACCOUNTREGISTER_ROUTES.SIGNUP}`, "POST", payload);
        return response.data;
      } catch (err) {
        throw err;
      }
    },
  });

  const { mutate, isError, isSuccess, isPending, error, data } = mutation;

  return {
    Signup: mutate,
    isLoading: isPending,
    isError,
    isSuccess,
    error: error as AxiosError,
    data: data as iDataResponse,
  };
};

export default useUserRegister;
