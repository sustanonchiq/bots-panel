export const useLocalStorage = (
    key: string,
): [string, (value: string) => void] => {
    const setItem = (value: string) => window.localStorage.setItem(key, value);

    return [window.localStorage.getItem(key), setItem];
};
