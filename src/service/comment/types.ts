import { Request } from "../tweets/types";

export interface CommentProps{
    id: number;
    description: string;
    image?: string;
    createdAt: string;
    tweet_id: number;
    user_id: number;
}

export interface Comments extends Request{
    description: string;
    image?: string;
    tweet_id: number;
    user_id: number;
}

export interface UpdateCommentsRequest extends Request{
    id: string;
    description: string;
    image?: string;
    tweet_id: number;
    user_id: number;
}

export interface CommentsRequestUser extends Request{
    id: number | undefined;
}