import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const listItems = galleryItems
  .map(
    (galleryItem) =>
      `<li><a class="gallery__item" href="${galleryItem.original}">
    <img class="gallery__image" src="${galleryItem.preview}" 
    alt="${galleryItem.description}"/></a></li>`
  )
  .join("");
gallery.innerHTML = listItems;
