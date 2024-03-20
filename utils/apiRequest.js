import { useState, useEffect } from "react";
import axios from "axios";

const postTours = async (reqBody) => {
    const options = {
        method: "POST",
        url: `${process.env.EXPO_PUBLIC_BASE_API_URL}tours`,
        // headers: {
        // "Authorization": `Bearer ${accessToken}`,
        // },
        body: { ...reqBody },
    }
    const response = await axios.request(options);
    return response;
};

export { postTours };
