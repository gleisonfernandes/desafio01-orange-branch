import { AxiosResponse } from "axios";
import { Api } from "../api";
import { LikeProps, LikeRequest } from "./types";
import { Request } from "../tweets/types";

export const PostLike = async ({token, tweet_id, user_id}: LikeRequest): Promise<AxiosResponse> => {
    return await Api.post("/api/likes", {
      tweet_id,
      user_id
    }, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
}

export const GetAllLikes = async ({token}: Request): Promise<AxiosResponse<LikeProps[]>> => {
  return await Api.get("/api/likes", {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  });

};

export const DeleteLike = async ({token, tweet_id, user_id}: LikeRequest): Promise<AxiosResponse> => {
    return await Api.delete(`/api/likes?tweet=${tweet_id}&user=${user_id}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
}