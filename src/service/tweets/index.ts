import { AxiosResponse } from "axios";
import { Api } from "../api";
import { Request, TweetProps, TweetRequest, TweetRequestUser, UpdateTweetRequest } from "./types";

export const GetAllTweets = async ({token}: Request): Promise<AxiosResponse<TweetProps[]>> => {
  return await Api.get("/api/tweets", {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  });

};

export const PostTweet = async ({token, description, tweetImage, user_id}: TweetRequest): Promise<AxiosResponse> => {
  return await Api.post("/api/tweets", {
    description,
    tweetImage,
    user_id
  }, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });

};

export const UpdateTweets = async ({id, user_id, description, tweetImage, token}:UpdateTweetRequest): Promise<AxiosResponse> => {
  return await Api.put(`/api/tweets/${id}`, {
    description,
    tweetImage,
    user_id
  }, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  });

};

export const GetUserTweets = async ({token, id}: TweetRequestUser ): Promise<AxiosResponse<TweetProps[]>> => {
  return await Api.get(`/api/tweets/user?user=${id}`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  });

};

export const DeleteTweet = async ({token, id}: TweetRequestUser ): Promise<AxiosResponse> => {
  return await Api.delete(`/api/tweets/${id}`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });
}