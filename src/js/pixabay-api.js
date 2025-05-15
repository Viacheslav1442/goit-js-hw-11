import axios from 'axios';
export default function getImagesByQuery(query) {
    const MAIN_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const params = new URLSearchParams({
        key: '50274791-f4b76ab6fee4d49d8c558ca21',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });
    const url = `${MAIN_URL}${END_POINT}?${params}`;
    const headers = {
        'X-RateLimit-Limit':
            'The maximum number of requests that the consumer is permitted to make in 60 seconds.',
        'X-RateLimit-Remaining':
            'The number of requests remaining in the current rate limit window.',
        'X-RateLimit-Reset':
            'The remaining time in seconds after which the current rate limit window resets.',
    };
    return axios
        .get(url)
        .then(response => {
            return response.data.hits;
        })
        .catch(error => {
            console.log('Помилка при запиті до Pixabay:', error);
        });
}