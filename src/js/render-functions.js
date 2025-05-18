import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;

export function createGallery(images) {
  const container = document.querySelector('.gallery');

  const markup = images
    .map(
      img => `
        <div class="gallery-item">
          <a class="gallery-link" href="${img.largeImageURL}">
            <img class="gallery-image" src="${img.webformatURL}" alt="${img.tags}" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${img.likes}</p>
            <p><b>Views:</b> ${img.views}</p>
            <p><b>Comments:</b> ${img.comments}</p>
            <p><b>Downloads:</b> ${img.downloads}</p>
          </div>
        </div>
      `
    )
    .join('');

  container.insertAdjacentHTML('beforeend', markup);

  // Ініціалізація або оновлення екземпляра SimpleLightbox
  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  }
}