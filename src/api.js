import axios from 'axios';

export const fetchMessage = async () => {
    const response = await axios.get('/');
    return response.data;
};
