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
    await axios.get(`${API}/devices/getAll`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
)

//need to add _id
const getDevice = async () => (
    await axios.get(`${API}/devices/getOne`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
)


export const api = {
    signUp,
    signIn,
    getAllDevices,
    getDevice
};
