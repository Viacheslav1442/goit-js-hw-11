import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import getImagesByQuery from './js/pixabay-api.js';
import * as all from './js/render-functions';

const container = document.querySelector('.gallery');
const form = document.querySelector('.form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const userValue = e.target.elements['search-text'].value.trim();

    // Перевірка на порожній запит до звернення до API
    if (userValue === '') {
        iziToast.show({
            title: 'Error',
            message: 'Please enter a search query!',
            position: 'topRight',
            color: 'red',
        });
        return;
    }

    all.clearGallery(); // Очищення перед завантаженням нових зображень
    all.showLoader();   // Показуємо лоадер

    getImagesByQuery(userValue)
        .then(data => {
            if (data.length === 0) {
                iziToast.show({
                    title: 'Error',
                    message:
                        'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                    color: 'red',
                });
            } else {
                const markup = all.createGallery(data);
                container.insertAdjacentHTML('beforeend', markup);
                new SimpleLightbox('.gallery-item a', {
                    captionsData: 'alt',
                    captionDelay: 250,
                });
            }
        })
        .catch(error => {
            iziToast.show({
                title: 'Error',
                message: 'Something went wrong. Please try again later.',
                position: 'topRight',
                color: 'red',
            });
            console.error(error);
        })
        .finally(() => {
            all.hideLoader();
        });

    e.target.reset();
});