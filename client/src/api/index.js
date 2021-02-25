import axios from 'axios';

const API = '/api';
let token = localStorage.getItem('token');

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

const getDevice = async (id) => (
    await axios.get(`${API}/devices/getOne/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    })
)

const getDeviceUsers = async (id) => (
    await axios.get(`${API}/deviceUser/users/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
);

const deleteDevice = async (id) => (
    await axios.delete(`${API}/devices/delete/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
)


const createDevice = async ({ device_name, device_room }) => {

    return await axios.post(`${API}/devices/add/`, {

        device_name,
        device_room,
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
};

export const api = {
    signUp,
    signIn,
    getAllDevices,
    getDevice,
    getDeviceUsers,
    deleteDevice,
    createDevice
};
