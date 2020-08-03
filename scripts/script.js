let editButton = document.querySelector('.profile__edit');
let popupElement = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');
let form = document.querySelector('.form');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let nameData = document.querySelector('.profile__name');
let aboutData = document.querySelector('.profile__about');
let name = document.querySelector('.form__input_type_name');
let about = document.querySelector('.form__input_type_about');


function togglePopup() {
  if (popupElement.classList.contains('popup_opened')) {
    popupElement.classList.remove('popup_opened');
  }else{
    popupElement.classList.add('popup_opened');
    name.value = nameData.textContent;
    about.value = aboutData.textContent;
  }
}

function changeName() {

  profileName.textContent = name.value;
  profileAbout.textContent = about.value;

  togglePopup();
}

editButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);
form.addEventListener('submit', changeName);
