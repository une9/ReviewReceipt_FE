import axios, { AxiosPromise } from "axios";

export const request = (method: string, url: string, data?: object): AxiosPromise<any> => {
    const tmp = {
        method,
        url: "/api" + url,
        data
    }
    console.log(tmp)
    return axios(tmp)
        .then(async res => await res.data)
        .catch(err => {
            const { status } = err.response;

            // if (err ) {
            //     return onUnauthorized
            // }

            throw Error(err);
        })
}