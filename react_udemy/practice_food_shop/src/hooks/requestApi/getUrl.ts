export default function getUrl(endpoint: string) {
    return endpoint.startsWith('/') ? `http://localhost:3000${endpoint}` : `http://localhost:3000/${endpoint}`;
}