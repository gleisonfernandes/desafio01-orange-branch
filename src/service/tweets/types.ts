import { User } from "../user/types";

export interface TweetProps{
    id: number;
    avatar: string;
    name: string;
    nickname: string;
    createdAt: string;
    description: string;
    likes: string;
    retweets: string;
    comments: string;
    tweetImage?: string;
    user?: User;
}

export interface Request{
    token: string;
}

export interface TweetRequest extends Request{
    user_id: number;
    description: string;
    tweetImage?: string;
}

export interface TweetRequestUser extends Request{
    id: number | undefined;
}

export interface UpdateTweetRequest extends Request{
    id: number | undefined;
    user_id: number;
    description: string;
    tweetImage?: string;
}