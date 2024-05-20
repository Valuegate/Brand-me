import { AxiosInstance, AxiosResponse } from "axios";
import { AUTH_ROUTES, ACCOUNTREGISTER_ROUTES, ACCOUNTPROFILE_ROUTES, CONTACTUS_ROUTES } from "./routes";

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

  const userContactUS = (body: any) => {
    return client.post(CONTACTUS_ROUTES.CONTACT, body);
  };

  return {
    login,
    userRegister,
    getAccountProfile,
    userContactUS,
  };
};

export default createAuth;
