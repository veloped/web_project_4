export const popupImageElement = document.querySelector('.popup_type_image');

export function openImage(name, link) {
    const popupImage = document.querySelector('.popup__image');
    const popupCaption = document.querySelector('.popup__caption');
    togglePopup(popupImageElement);
    popupImage.src = link;
    popupImage.alt = name;
    popupCaption.textContent = name;
  }

export function togglePopup(element) {
    element.classList.toggle('popup_opened');
}