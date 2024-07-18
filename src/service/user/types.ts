import { Request } from "../tweets/types";

export interface User {
    id: number;
    email: string;
    password: string;
    name: string;
    nickname: string;
    dateofbirth: string;
    profileImage?: string;
    coverImage?: string;
    createdAt?: string;
    bio?: string;
    city?: string;
    site?: string;
    Following?: number;
    Followers?: number;
  }

  export interface UserRequest extends Request{
    email: string;
  }

  export interface UpdateUserProps{
  name: string;
  profileImage: string | null;
	coverImage: string | null;
	bio: string;
	city: string;
	site: string;
}
export interface RecentsUsers {
  id: number;
  name: string;
  nickname: string;
  profileImage?: string;

}