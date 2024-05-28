export interface User {
    id: number;
    email: string;
    password: string;
    name: string;
    nickname: string;
    dateofbirth: string;
    profileImage: string;
    coverImage: string;
  }

export interface Props{
    avatar: string;
    name: string;
    nickname: string;
    date: string;
    description: string;
    likes: string;
    retweets: string;
    comments: string;
    image?: string;
}