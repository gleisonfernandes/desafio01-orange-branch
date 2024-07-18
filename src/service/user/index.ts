import { AxiosResponse } from "axios";
import { Api } from "../api";
import { RecentsUsers, UpdateUserProps, User} from "./types";
import { Request } from "../tweets/types";

export const GetAllUser = async ({token}: Request): Promise<AxiosResponse<RecentsUsers[]>> => {
  return await Api.get("/api/users", {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  });

};

export const GetUser = async (token: string, email: string): Promise<AxiosResponse<User>> => {
  return await Api.get(`/api/users/${email}`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  });

};

export const UpdateUser = async (
  formData: UpdateUserProps,
  id: number,
  token: string
): Promise<AxiosResponse> => {
  return await Api.put(`/api/users/${id}`, formData, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  });

};
