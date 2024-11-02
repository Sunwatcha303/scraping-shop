import { jwtDecode } from 'jwt-decode'

const getCookie = (name) => {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith(`${name}=`)) {
            const cookieValue = cookie.substring(name.length + 1);
            try {
                return cookieValue.startsWith('{') ? JSON.parse(cookieValue) : cookieValue;
            } catch (error) {
                console.error('Failed to parse cookie:', error);
                return cookieValue;
            }
        }
    }
    return null;
};

const decodeToken = (token) => {
    if (!token) {
        console.error('No token provided for decoding');
        return null;
    }
    return jwtDecode(token); // Use jwt_decode to decode the token
};

export { getCookie, decodeToken };