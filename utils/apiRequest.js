import { useState, useEffect } from "react";
import axios from "axios";

const postTours = async (reqBody) => {
    const options = {
        method: "POST",
        url: `${process.env.EXPO_PUBLIC_BASE_API_URL}tours/mockup`,
        headers: {
            // "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
        data: JSON.stringify(reqBody)
    }
    console.log(options);
    const response = await axios.request(options);
    return response;
};

export { postTours };
