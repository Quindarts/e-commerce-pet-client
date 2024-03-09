export const getNewUrlByParams = (currentParams, filterParam) => {
    let newParams = { ...currentParams, ...filterParam }; 
    const paramSearch = new URLSearchParams(newParams);
    const currentUrl = window.location.pathname;
    const url = currentUrl + "?" + paramSearch;
    return url;
};