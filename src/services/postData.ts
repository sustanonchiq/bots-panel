import apiConfig from '../../api.config';

export const postData = async <T>(
    url: string,
    data: any,
): Promise<T | null> => {
    try {
        const response = await fetch(`${apiConfig.rootURL}/${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const responseData: T = await response.json();

        return responseData;
    } catch (error) {
        console.error('Ошибка:', error);
        return null;
    }
};
