const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryListRef = document.querySelector('#gallery');
galleryListRef.classList.add('gallery');

const createGallery = images.map(image => {
  const galleryItem = `<li><img src="${image.url}" alt="${image.alt}" width="370"<li>`;
  // galleryItem.join(' ');
  return galleryItem;
});
galleryListRef.insertAdjacentHTML('beforeend', `${createGallery.join(' ')}`);



// const createGallery = images.map(image => {
//   const galleryItem = document.createElement('li');
//   galleryItem.classList.add('gallery__item');
//   const galleryImage = document.createElement('img');
//   galleryImage.setAttribute('src', image.url);
//   galleryImage.setAttribute('alt', image.alt);
//   galleryImage.setAttribute('width', 370);
//   galleryItem.appendChild(galleryImage);
//   galleryList.appendChild(galleryItem);
//   return galleryList;
// });
