import client from "../axios";

const FetchStatus = async () => {
    if (!process.env.NEXT_PUBLIC_API_KEY) {
        console.warn("API key is missing. Please provide an API key and refresh.");
        return null;
    }
    const { data } = await client.get("recruitment");
    return data;
}

export { FetchStatus }