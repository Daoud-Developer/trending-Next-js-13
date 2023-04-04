export const parametersFormatted = (parameters) => {
    return Object.entries(parameters).map(([key, value]) => {
        return `${key}=${value}`;
    }).join('&');
};
