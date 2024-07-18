import { AxiosResponse } from "axios";
import { Api } from "../api";
import { Request } from "../tweets/types";
import { CommentProps, Comments, CommentsRequestUser, UpdateCommentsRequest } from "./types";

export const GetAllComments = async ({token}: Request): Promise<AxiosResponse<CommentProps[]>> => {
  return await Api.get("/api/comments", {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  });
};

export const PostComments = async ({token, description, image, tweet_id, user_id}: Comments): Promise<AxiosResponse> => {
  return await Api.post("/api/comments", {
    description,
    image,
    tweet_id,
    user_id,
  }, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });

};

export const UpdateComments= async ({id, tweet_id, user_id, description, image, token}:UpdateCommentsRequest): Promise<AxiosResponse> => {
  return await Api.put(`/api/comments/${id}`, {
    description,
    image,
    tweet_id,
    user_id
  }, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  });

};

export const DeleteComment = async ({token, id}: CommentsRequestUser ): Promise<AxiosResponse> => {
  return await Api.delete(`/api/comments/${id}`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });
}
