import axios from 'axios';

const API = '/api';
let token = localStorage.getItem('token');
console.log(token);

const signUp = async (email, password) => (
    await axios.post(`${API}/auth/signUp`, {
        email,
        password
    })
);

const signIn = async (email, password) => (
    await axios.post(`${API}/auth/signIn`, {
        email,
        password
    })
);

const getAllDevices = async () => (
    await axios.get(`${API}/devices`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
)


export const api = {
    signUp,
    signIn,
    getAllDevices
};
