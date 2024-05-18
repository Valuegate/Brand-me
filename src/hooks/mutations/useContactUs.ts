import { fetcher, formFetcher } from "@/lib/fetcher";
import { CONTACTUS_ROUTES } from "@/services/routes";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export type TContactPayload = { name: string; email: string; message: string;  };

interface iDataResponse {
    name : string;
    email : string;
    message: string;
}

const useUserContactUs = () => {
  const mutation = useMutation({
    mutationFn: async (payload: TContactPayload) => {
      try {
        const response = await fetcher(`https://brandme-2.onrender.com/api${CONTACTUS_ROUTES.CONTACT}`, "POST", payload);
        return response.data;
      } catch (err) {
        throw err;
      }
    },
  });

  const { mutate, isError, isSuccess, isPending, error, data } = mutation;

  return {
    Contact: mutate,
    isLoading: isPending,
    isError,
    isSuccess,
    error: error as AxiosError,
    data: data as iDataResponse,
  };
};

export default useUserContactUs;
