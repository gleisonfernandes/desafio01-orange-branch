import { Request } from "../tweets/types";

export interface LikeProps{
    tweet_id: number;
    user_id: number;
}

export interface LikeRequest extends Request{
    tweet_id: number;
    user_id: number;
}