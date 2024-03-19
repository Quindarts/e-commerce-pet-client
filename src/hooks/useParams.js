import { useSearchParams } from "react-router-dom";

export const useParamsFilter = () => {
    const [searchParams] = useSearchParams();

    const paramsObject = Object.fromEntries(searchParams.entries());

    return paramsObject;
}

// const paramsArray = Array.from(searchParams.entries()).map(([key, value]) => ({ [key]: value }));