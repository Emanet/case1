import client from "../axios";

const FetchStatus = async () => {
    if (!process.env.NEXT_PUBLIC_API_KEY) {
        console.warn("API key is missing. Please provide an API key and refresh.");
        return null;
    }
    try {
        const response = await client.get("recruitment");
        console.log('Success Response:', response.data);
        return response.data;
    } catch (error) {
        console.log("Error:", error);
        return null;
    }
}
export { FetchStatus };