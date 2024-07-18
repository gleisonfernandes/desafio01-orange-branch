export interface UserProps {
    email?: string;
    token?: string;
    name?: string;
    nickname?: string;
    id?: number;
}

export interface ContextProps extends IUser {
    authenticate: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

export interface AuthProviderProps {
    children: JSX.Element;
}

export interface IUser {
    email?: string;
    token?: string;
}