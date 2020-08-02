let editButton = document.querySelector('.profile__edit');
let popupElement = document.querySelector('.popup');
let overlay = document.querySelector('.overlay');
let closeButton = document.querySelector('.popup__close-button');
let saveButton = document.querySelector('.form__save-button');
let profileName = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__subtitle');
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
  let occupation = document.querySelector('.form__input_occupation');

  profileName.textContent = name.value;
  profileOccupation.textContent = occupation.value;

  popup();
}

editButton.addEventListener('click', popup);
closeButton.addEventListener('click', popup);
saveButton.addEventListener('click', changeName);


