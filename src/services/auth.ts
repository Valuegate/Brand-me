import { AxiosInstance, AxiosResponse } from "axios";
import { AUTH_ROUTES, ACCOUNTREGISTER_ROUTES, USERSPROFILE_ROUTES, } from "./routes";

const createAuth = (client: AxiosInstance) => {
  const login = (body: any) => {
    return client.post(AUTH_ROUTES.LOGIN, body);
  };

  const userRegister = (body: any) => {
    return client.post(ACCOUNTREGISTER_ROUTES.SIGNUP, body);
  };

  const getUsersProfile = () => {
    return client.get(USERSPROFILE_ROUTES.USERS);
  };

  return {
    login,
    userRegister,
    getUsersProfile,
  };
};

export default createAuth;
