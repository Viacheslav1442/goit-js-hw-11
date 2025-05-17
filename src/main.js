import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import getImagesByQuery from './js/pixabay-api.js';
import { clearGallery, showLoader, hideLoader, createGallery } from './js/render-functions';

const container = document.querySelector('.gallery');
const form = document.querySelector('.form');

// Ініціалізація SimpleLightbox один раз
const lightbox = new SimpleLightbox('.gallery-item a', {
    captionsData: 'alt',
    captionDelay: 250,
});

form.addEventListener('submit', async e => {
    e.preventDefault();

    const userValue = e.target.elements['search-text'].value.trim();

    if (userValue === '') {
        iziToast.show({
            title: 'Error',
            message: 'Please enter a search query!',
            position: 'topRight',
            color: 'red',
        });
        return;
    }

    clearGallery();
    showLoader();

    try {
        const data = await getImagesByQuery(userValue);

        if (data.length === 0) {
            iziToast.show({
                title: 'Error',
                message:
                    'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
                color: 'red',
            });
        } else {
            createGallery(data);
            lightbox.refresh(); // Оновлюємо lightbox після вставки HTML
        }
    } catch (error) {
        iziToast.show({
            title: 'Error',
            message: 'Something went wrong. Please try again later.',
            position: 'topRight',
            color: 'red',
        });
        console.error(error);
    } finally {
        hideLoader();
        e.target.reset();
    }
});