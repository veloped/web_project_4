const editButton = document.querySelector('.profile__edit');
const popupEditElement = document.querySelector('.popup-edit');
const closeButtonEdit = document.querySelector('.form__close-button_edit');
const closeButtonAdd = document.querySelector('.form__close-button_add');
const formEdit = document.querySelector('.form_edit');
const formAdd = document.querySelector('.form_add');
const inputTitle = document.querySelector('.form__input_type_title');
const inputLink = document.querySelector('.form__input_type_link');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const name = document.querySelector('.form__input_type_name');
const about = document.querySelector('.form__input_type_about');
const gridList = document.querySelector('.grid__list');
const addButton = document.querySelector('.profile__button');
const popupAddElement = document.querySelector('.popup-add');




function togglePopupAdd() {
  if (popupAddElement.classList.contains('popup-add_opened')) {
    popupAddElement.classList.remove('popup-add_opened');
    inputTitle.value = "";
    inputLink.value = "";
  }else{
    popupAddElement.classList.add('popup-add_opened');
  }
}

function togglePopupEdit() {
  if (popupEditElement.classList.contains('popup-edit_opened')) {
    popupEditElement.classList.remove('popup-edit_opened');
  }else{
    popupEditElement.classList.add('popup-edit_opened');
    name.value =  profileName.textContent;
    about.value =  profileAbout.textContent;
  }
}



function takeData() {
  event.preventDefault();

  const title = inputTitle.value;
  const link = inputLink.value;


  if ((title != "") && (link != "")) {
    addCard(title, link);
    togglePopupAdd();
  }
}

function changeName() {
  event.preventDefault();

  profileName.textContent = name.value;
  profileAbout.textContent = about.value;

  togglePopupEdit();
}

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
  gridList.prepend(gridCard);
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

addButton.addEventListener('click', togglePopupAdd);
closeButtonAdd.addEventListener('click', togglePopupAdd);
editButton.addEventListener('click', togglePopupEdit);
closeButtonEdit.addEventListener('click', togglePopupEdit);
formEdit.addEventListener('submit', changeName);
formAdd.addEventListener('submit', takeData);


initialCards.forEach(function(item) {
  addCard(item.name, item.link);
});


