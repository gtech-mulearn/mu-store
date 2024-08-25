import { VITE_BACKEND_URL } from "@/utils/constants";
import { setupInterceptorsTo } from "@/utils/interceptors";
import axios from "axios";

export const privateGateway = axios.create({
    baseURL: VITE_BACKEND_URL,
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
    }
});
export const publicGateway = axios.create({
    baseURL: VITE_BACKEND_URL,
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
    }
})

setupInterceptorsTo(privateGateway)