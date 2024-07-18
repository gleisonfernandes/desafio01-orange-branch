import { Api } from "../api";
import { getUserLocalStorage } from "../../providers/AuthProvider/utils";

Api.interceptors.request.use(
    (config) => {
        const user = getUserLocalStorage();

        config.headers.Authorization = `Bearer ${user?.token}`;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)