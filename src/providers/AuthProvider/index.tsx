import React, { createContext, useEffect, useState } from "react";
import { AuthProviderProps, ContextProps, IUser, UserProps } from "./types";
import { LoginRequest, getUserLocalStorage, setUserLocalStorage } from "./utils";

export const AuthContext = createContext<ContextProps>({} as ContextProps)

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<IUser | null>()

    useEffect(() => {
        const user = getUserLocalStorage();

        if (user) {
            setUser(user);
        }
    }, []);

    async function authenticate(email: string, password: string) {
        const response = await LoginRequest(email, password);

        console.log(response);
        

        const payload = {
            token: response,
            email,
        }

        setUser(payload);
        setUserLocalStorage(payload);
    }

    function logout() {
        setUser(null);
        setUserLocalStorage(null);
    }

    return (
        <AuthContext.Provider value={{ ...user, authenticate, logout }}>
            {children}
        </AuthContext.Provider>
    )
}