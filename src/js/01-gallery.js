import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const galleryMarUp = galleryItems
  .map(
    (item) => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
  )
  .join(" ");

galleryContainer.innerHTML = galleryMarUp;

let instance = null;

function handleClick(event) {
  event.preventDefault();
  const target = event.target;

  let largeImageURL; // Объявление переменной здесь

  if (target.classList.contains("gallery__image")) {
    largeImageURL = target.dataset.source; // Присвоение значения здесь
    console.log("URL большого изображения:", largeImageURL);

    // Используем basicLightbox для открытия модального окна
    instance = basicLightbox.create(`
      <img src="${largeImageURL}" width="800" height="600">
    `);
    instance.show();
    window.addEventListener("keydown", handleKeyDown);
  }
}

function handleKeyDown(event) {
  if (event.code === "Escape") {
    // Закрытие модального окна при нажатии клавиши Escape
    instance.close();
    // Удаление обработчика события нажатия клавиши Escape после закрытия модального окна
    window.removeEventListener("keydown", handleKeyDown);
  }
}

galleryContainer.addEventListener("click", handleClick);
console.log(galleryItems);
