import { useEffect, useState } from "react";
import { api } from "../services/api";

export function useFetch<T = unknown>(url: string, params: any = {}) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | undefined>();
    const [data, setData] = useState<T>();

    useEffect(() => {
        setIsLoading(true);
        api.get<T>(url, { params })
            .then(res => setData(res.data))
            .catch(error => setError(error))
            .finally(() => setIsLoading(false));
    }, []);

    return {
        isLoading,
        data,
        error
    };
}