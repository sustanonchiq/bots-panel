const getData = async (url: string) => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Ошибка при получении данных: ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Ошибка:', error);
        return null; 
    }
};
