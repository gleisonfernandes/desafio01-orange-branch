import { AxiosResponse } from "axios";
import { Api } from "../api";
import { RegisterUserProps } from "./types";

export const RegisterUser = async (
  formData: RegisterUserProps,
): Promise<AxiosResponse> => {
  return await Api.post("/api/users/register", formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });

};