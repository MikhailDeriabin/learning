export const post = async (url: string, body: object): Promise<object | number | null> => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify(body)
        });

        if(!response || !response.ok)
            return response.status;

        return response.json();
    } catch (e) {
        return null;
    }
}