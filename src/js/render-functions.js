export function clearGallery() {
  const container = document.querySelector('.gallery');
  container.innerHTML = '';
}

export function showLoader() {
  const loader = document.querySelector('.loader');
  if (loader) loader.classList.remove('hidden');
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) loader.classList.add('hidden');
}

export function createGallery(images) {
  const container = document.querySelector('.gallery');

  const markup = images
    .map(
      img => `
        <div class="gallery-item">
          <a href="${img.largeImageURL}">
            <img src="${img.webformatURL}" alt="${img.tags}" />
          </a>
        </div>
      `
    )
    .join('');

  container.insertAdjacentHTML('beforeend', markup);
}