let editButton = document.querySelector('.profile__edit');
let popupElement = document.querySelector('.popup');
let overlay = document.querySelector('.overlay');
let closeButton = document.querySelector('.popup__close-button');
let saveButton = document.querySelector('.form__save-button');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
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

function changeName() {
  let name = document.querySelector('.form__input_name');
  let about = document.querySelector('.form__input_about');

  profileName.textContent = name.value;
  profileAbout.textContent = about.value;

  popup();
}

editButton.addEventListener('click', popup);
closeButton.addEventListener('click', popup);
saveButton.addEventListener('click', changeName);


