import client from "../axios";

const FetchStatus = async () => {
    if (!process.env.NEXT_PUBLIC_API_KEY) {
        console.warn("API key is missing. Please provide an API key.");
        return null;
    }
    try {
        const { data } = await client.get("recruitment");
        return data;
    } catch (error) {
        console.error("Error while fetching data:", error);
        throw error;
    }
};
export { FetchStatus };
