import { useState } from "react";

export const useLoader = (initialState = false) => {
    const [loading, setLoading] = useState(initialState);

    const on = () => setLoading(true);
    const off = () => setLoading(false);

    const invokeApi = async ({ api, callBack, errorCallback }) => {
        try {
            on();
            // api has to be a fucntion returning axios promise i.e () => axios.get("http://example.com")
            const { data } = await api();
            if (process.env.REACT_APP_MODE === "local") console.log(data);
            callBack(data);
        } catch (e) {
            if (process.env.REACT_APP_MODE === "local") console.log(e);
            errorCallback && errorCallback(e);
        } finally {
            off();
        }
    }

    return {
        loading,
        on,
        off,
        invokeApi
    }
}