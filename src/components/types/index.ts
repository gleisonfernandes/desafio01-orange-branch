export interface User {
    id: number;
    email: string;
    password: string;
    name: string;
    nickname: string;
    dateofbirth: string;
    profileImage: string;
    coverImage: string;
    joined: string;
    bio: string;
    city: string;
    site: string;
  }

export interface Props{
    id: number;
    avatar: string;
    name: string;
    nickname: string;
    date: string;
    description: string;
    likes: string;
    retweets: string;
    comments: string;
    image?: string;
    user_id: number;
}