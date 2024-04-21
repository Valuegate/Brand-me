import { fetcher, formFetcher } from "@/lib/fetcher";
import { ACCOUNTREGISTER_ROUTES } from "@/services/routes";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export type TSignupPayload = { email: string; password: string; first_name: string; last_name: string; password2: string;  };

interface iDataResponse {
    email : string;
    first_name : string;
    last_name: string;
    password: string;
    password2: string;
}

const useUserRegister = () => {
  const mutation = useMutation({
    mutationFn: async (payload: TSignupPayload) => {
      try {
        const response = await formFetcher(`https://brandme-2.onrender.com/api${ACCOUNTREGISTER_ROUTES.SIGNUP}`, "POST", payload);
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
