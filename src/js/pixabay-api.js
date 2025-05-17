import axios from 'axios';

const MAIN_URL = 'https://pixabay.com';
const END_POINT = '/api/';
const API_KEY = '50282426-bcbed3422443d463b1ec5299f'; // рекомендовано винести у змінну

export default function getImagesByQuery(query) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

    const url = `${MAIN_URL}${END_POINT}?${params}`;

    return axios
        .get(url)
        .then(response => response.data.hits)
        .catch(error => {
            console.error('Помилка при запиті до Pixabay:', error);
            throw error; // Прокидаємо помилку для зовнішньої обробки
        });
}