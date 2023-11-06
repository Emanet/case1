import axios from "axios"

const client = axios.create({
        baseURL: `https://c5ljdx2w0m.execute-api.eu-central-1.amazonaws.com/`,
        headers: {
                "X-Api-Key": process.env.NEXT_PUBLIC_API_KEY,
        }
});

export default client;