import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useUpdateQueryParam = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const updateQueryParam = useCallback(
        (params) => {
            const searchParams = new URLSearchParams(location.search);

            Object.entries(params).forEach(([key, value]) => {
                if (value) {
                    searchParams.set(key, value);
                } else {
                    searchParams.delete(key);
                }
            });

            navigate(`${location.pathname}?${searchParams.toString()}`, {
                replace: true,
            });
        },
        [location, navigate]
    );

    return updateQueryParam;
};

export default useUpdateQueryParam;
