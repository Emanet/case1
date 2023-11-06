import client from "../axios";

const FetchStatus = async () => {
    const { data } = await client.get("recruitment")
    return data;
};

export { FetchStatus };