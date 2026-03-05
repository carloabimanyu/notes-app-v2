function getAccessToken() {
    return localStorage.getItem("accessToken");
}

function putAccessToken(accessToken) {
    localStorage.setItem("accessToken", accessToken);
}

export { getAccessToken, putAccessToken };