import { AxiosInstance, AxiosResponse } from "axios";
import { AUTH_ROUTES, ACCOUNTREGISTER_ROUTES, USERSPROFILE_ROUTES, USER_ROUTES, } from "./routes";

const createAuth = (client: AxiosInstance) => {
  const login = (body: any) => {
    return client.post(AUTH_ROUTES.LOGIN, body);
  };

  const getCurrentUser = () => {
    return client.get(USER_ROUTES.USER);
  };

  const userRegister = (body: any) => {
    return client.post(ACCOUNTREGISTER_ROUTES.SIGNUP, body);
  };

  const getUsersProfile = () => {
    return client.get(USERSPROFILE_ROUTES.USERS);
  };

  return {
    login,
    getCurrentUser,
    userRegister,
    getUsersProfile,
  };
};

export default createAuth;
