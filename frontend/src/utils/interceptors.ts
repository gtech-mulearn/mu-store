
import { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { privateGateway, publicGateway } from "@/services/apiGateway";
import { authRoutes } from "@/utils/urls";
import { devConsole } from "./helpers";
import toast from "react-hot-toast";

/**
 * Adds the accessToken to the Authorization header of the given config.
 * @param {InternalAxiosRequestConfig} config
 */
const addAccessToken = (config: InternalAxiosRequestConfig) => {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem("accessToken")}`;
}

/**
 * Ensures that the given URL ends with a slash.
 * @param {InternalAxiosRequestConfig['url']} url
 */
const ensureUrlEndWithSlash = (url: InternalAxiosRequestConfig['url']) => {
    if (!url?.endsWith("/")) url += "/";
}

/**
 * An interceptor that adds the accessToken to the Authorization header and ensures that the URL ends with a slash.
 * @param {InternalAxiosRequestConfig} config
 * @returns {InternalAxiosRequestConfig}
 */
const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) addAccessToken(config);
    if (config.url) ensureUrlEndWithSlash(config.url);
    devConsole.info(`[request] [${JSON.stringify(config)}]`);
    return config;
}

/**
 * An interceptor that logs request errors and rejects the promise.
 * @param {AxiosError} error The error.
 * @returns {Promise<AxiosError>} The rejected promise.
 */
const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    devConsole.error(`[request error] [${JSON.stringify(error)}]`);
    return Promise.reject(error);
}

/**
 * An interceptor that logs responses and returns the response.
 * @param {AxiosResponse<AxiosResponseData>} response The response.
 * @returns {AxiosResponse<AxiosResponseData>} The response.
 */
const onResponse = (response: AxiosResponse<AxiosResponseData>): AxiosResponse<AxiosResponseData> => {
    devConsole.info(`[response] [${JSON.stringify(response)}]`);
    return response as AxiosResponse<AxiosResponseData>
}

/**
 * Updates the access token by making a request to the server with the current refresh token.
 * If the request is successful, it updates the access token in the local storage and
 * returns the response of the request. If the request fails, it shows an error toast and
 * rejects the promise.
 * @returns {Promise<AxiosResponse<AxiosResponseData>>} The response of the request.
 */
const updateAccessToken = async () => {
    try {
        const { config, data } = await publicGateway.post(authRoutes.getAccessToken, { refreshToken: localStorage.getItem("refreshToken") })
        localStorage.setItem("accessToken", data.response.accessToken);
        config.headers["Authorization"] = `Bearer ${localStorage.getItem("accessToken")}`;
        return await privateGateway.request(config);
    } catch (error) {
        toast.error("Your session has expired. Please login again.");
        return Promise.reject(error as AxiosError<AxiosResponseData>);
    }
}

/**
 * An interceptor that handles response errors. If the error is a 1000 (Unauthorized),
 * it tries to update the access token by making a request to the server with the
 * current refresh token. If the request is successful, it updates the access token
 * in the local storage and returns the response of the request. If the request fails,
 * it shows an error toast and rejects the promise. Otherwise, it logs the error and
 * rejects the promise.
 * @param {AxiosError<AxiosResponseData>} error The error.
 * @returns {Promise<AxiosError<AxiosResponseData>>} The rejected promise.
 */

const onResponseError = async (error: AxiosError<AxiosResponseData>): Promise<AxiosError<AxiosResponseData>> => {
    if (error.response?.data?.statusCode === 1000) updateAccessToken();
    devConsole.error(`[response error] [${JSON.stringify(error)}]`);
    return Promise.reject(error as AxiosError<AxiosResponseData>);
}

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
}