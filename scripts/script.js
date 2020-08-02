let editButton = document.querySelector('.profile__edit');
let popupElement = document.querySelector('.popup');
let overlay = document.querySelector('.overlay');
let closeButton = document.querySelector('.popup__close-button');

let popupOpened = false;

function popup() {
  if (popupOpened === false) {
    popupElement.classList.add('popup_opened');
    overlay.classList.add('overlay_opened');
    popupOpened = true;
  }else{
    popupElement.classList.remove('popup_opened');
    overlay.classList.remove('overlay_opened');
    popupOpened = false;
  }
}

editButton.addEventListener('click', popup);
closeButton.addEventListener('click', popup);


