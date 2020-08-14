const editButton = document.querySelector('.profile__edit');
const popupElement = document.querySelector('.popup');
const closeButton = document.querySelector('.form__close-button');
const form = document.querySelector('.form');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const name = document.querySelector('.form__input_type_name');
const about = document.querySelector('.form__input_type_about');
const gridList = document.querySelector('.grid__list');


function togglePopup() {
  if (popupElement.classList.contains('popup_opened')) {
    popupElement.classList.remove('popup_opened');
  }else{
    popupElement.classList.add('popup_opened');
    name.value =  profileName.textContent;
    about.value =  profileAbout.textContent;
  }
}

function changeName() {
  event.preventDefault();

  profileName.textContent = name.value;
  profileAbout.textContent = about.value;

  togglePopup();
}

editButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);
form.addEventListener('submit', changeName);

function addCard(cardName, cardLink) {

  const gridCard = document.createElement('li');
  gridCard.classList.add('grid__card');

  const gridImage = document.createElement('img');
  gridImage.classList.add('grid__image');
  gridImage.setAttribute('src', cardLink);
  gridImage.setAttribute('alt', cardName);

  const gridText = document.createElement('div');
  gridText.classList.add('grid__text');

  const gridName = document.createElement('h2');
  gridName.classList.add('grid__name');
  gridName.textContent = cardName;

  const gridLike = document.createElement('button');
  gridLike.classList.add('grid__like');

  gridCard.append(gridImage, gridText);
  gridText.append(gridName, gridLike);
  gridList.append(gridCard);
}


const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

initialCards.forEach(function(item) {
  addCard(item.name, item.link);
});
