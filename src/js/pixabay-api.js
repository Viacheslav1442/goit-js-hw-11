import axios from 'axios';

const API_KEY = '50282426-bcbed3422443d463b1ec5299f';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    };

    const response = await axios.get(BASE_URL, { params });
    return response.data;
}