import { AxiosInstance, AxiosResponse } from "axios";
import { AUTH_ROUTES, ACCOUNTREGISTER_ROUTES, ACCOUNTPROFILE_ROUTES, } from "./routes";

const createAuth = (client: AxiosInstance) => {
  const login = (body: any) => {
    return client.post(AUTH_ROUTES.LOGIN, body);
  };

  const userRegister = (body: any) => {
    return client.post(ACCOUNTREGISTER_ROUTES.SIGNUP, body);
  };

  const getAccountProfile = () => {
    return client.get(ACCOUNTPROFILE_ROUTES.ACCOUNT);
  };

  return {
    login,
    userRegister,
    getAccountProfile,
  };
};

export default createAuth;
