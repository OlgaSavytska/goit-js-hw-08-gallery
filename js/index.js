import galleryItem from './gallery-items.js';


let fragment = document.createDocumentFragment();
const gallery = document.querySelector('.gallery');


galleryItem.forEach(element => {
  const li = document.createElement('li');
  li.classList.add('gallery__item');

  const img = document.createElement('img');
  const a = document.createElement('a');
  a.classList.add('gallery__link');
  a.setAttribute('href', element.original);

  img.classList.add('gallery__image');
  img.setAttribute('src', element.preview);
  img.setAttribute('data-source', element.original);
  img.setAttribute('alt', element.description);

  const span = document.createElement('span');
  span.classList.add('gallery__icon');


  const i = document.createElement('i');
  i.classList.add('material-icons');
  i.textContent = ('zoom_out_map');

  span.append(i);
  a.append(img, span);
  li.append(a);
  fragment.append(li);
});

gallery.append(fragment);

const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox___image');
gallery.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();
  if (event.target === event.curretTarget) {
    return;
  }

  lightbox.classList.add('is-open');


  function lightboxImageGo() {
    lightboxImage.src = event.target.getAttribute('data-source');
    lightboxImage.alt = event.target.getAttribute('alt');
  }
  lightboxImageGo();
}

const closeBox = document.querySelector('.lightbox__button');
closeBox.addEventListener('click', closeLightbox);

const closeOverlay = document.querySelector('.lightbox__content');
closeOverlay.addEventListener('click', closeLightbox);


function closeLightbox() {
  if (event.target === lightboxImage) {
    return;
  }
  if (closeBox || closeOverlay) {
    lightbox.classList.remove('is-open');

  }
}

window.addEventListener('keydown', function (event) {
  if (event.code !== 'Escape') {
    return;
  }
  closeLightbox();
})