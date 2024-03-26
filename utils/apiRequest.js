import axios from "axios";
import { firebaseSetRequestStage } from "../hook/firebaseFetch";

const postTours = async (reqBody, item) => {
    const options = {
        method: "POST",
        url: `${process.env.EXPO_PUBLIC_BASE_API_URL}tours/mockup`,
        headers: {
            // "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
        data: JSON.stringify(reqBody)
    }
    try {
        const response = await axios.request(options);
        firebaseSetRequestStage(item, 1);
    } catch (e) {
        throw new Error(e.message);
    }
};

export { postTours };
