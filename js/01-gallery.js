import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const listItems = galleryItems
  .map(
    (galleryItem) =>
      `<li class="gallery__item"><a class="gallery__link" href="${galleryItem.original}">
    <img class="gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" 
    alt="${galleryItem.description}"/></a></li>`
  )
  .join("");
gallery.innerHTML = listItems;

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  const instance =
    basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">
  `);
  instance.show();
  const visible = instance.visible();
  if (visible === true) {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        instance.close();
      }
    });
  }
});
