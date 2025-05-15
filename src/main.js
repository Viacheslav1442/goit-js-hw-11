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

    const userValue = e.target.elements['search-text'].value;
    all.showLoader();
    getImagesByQuery(userValue)
        .then(data => {
            if (userValue.trim() === '' || data.length === 0) {
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
            }
        })
        .finally(() => {
            all.hideLoader();
        });
    e.target.reset();
    all.clearGallery();
});

new SimpleLightbox('.gallery-item a', {
    captionsData: 'alt',
    captionDelay: 250,
});