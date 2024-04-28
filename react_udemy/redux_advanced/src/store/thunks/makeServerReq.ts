export async function makeServerReq(endpoint: string, method: 'post' | 'get' | 'put' | 'delete'='get', data: any=null) {
    const options: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    }
    if(data)
        options.body = JSON.stringify(data);

    const resp = await fetch(`https://reactudemy-5c4b1-default-rtdb.europe-west1.firebasedatabase.app${endpoint}`, options);

    if(!resp.ok)
        throw new Error('Could not execute the query');

    return await resp.json();
}