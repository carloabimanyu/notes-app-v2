const BASE_URL = "https://notes-api.dicoding.dev/v1";

import { getAccessToken } from "./token";

export async function fetchWithToken(url, options = {}) {
    return fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });
}

export { BASE_URL };