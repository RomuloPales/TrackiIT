import axios from 'axios';

const baseURL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth';


function login(body) {
    const promise = axios.post(`${baseURL}/login`, body);
    return promise;
}

function signUp(body) {
    const promise = axios.post(`${baseURL}/signup`, body);
    return promise;
}

const apiAuth = { login, signUp };

export default apiAuth; 