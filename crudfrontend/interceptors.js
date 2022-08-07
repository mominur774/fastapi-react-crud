import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'

export const NEXT_PUBLIC_APP_API_URL = process.env.NEXT_PUBLIC_APP_API_URL || "http://127.0.0.1:8000/"

export const deleteAllCookies = () => {
    document.cookie.split(";").forEach(function (c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
}

const useInterCeptor = () => {

    const router = useRouter();

    const instance = axios.create({
        baseURL: NEXT_PUBLIC_APP_API_URL,
        timeout: 10000,
    });

    instance.defaults.timeout = 10000;
    instance.defaults.headers.common['Content-Type'] = 'application/json';
    instance.defaults.headers.common['Accept'] = 'application/json';


    instance.interceptors.request.use(
        config => {
            const authToken = Cookies.get('accessToken');
            if (authToken) {
                //config.headers['Authorization'] =  "token "+authToken; // for general token wize
                config.headers['Authorization'] = "JWT " + authToken;
            }
            return config
        },
        error => {
            Promise.reject(error)
        }
    )


    instance.interceptors.response.use(
        response => {
            return response.data
        },
        error => {
            if (error.response.status === 500) {
                console.log("Internal Server Error");
            }
            else if (error.response.status === 403) {
                console.log(error?.response?.data.detail);
            }
            else if (error.response.status === 404) {

            }
            else if (error.response.status === 400) {

            }
            else if (error.response.status === 409) {

            }
            else if (error.response.status === 401) {
                localStorage.clear()
                deleteAllCookies(); // delete all cookes if user not authenticated
                // toast.error(error.response.details);

            }
            return Promise.reject(error)
        }
    );

    return (instance);

}

export default useInterCeptor;