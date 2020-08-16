const editButton = document.querySelector('.profile__edit');
const popupEditElement = document.querySelector('.popup_type_edit');
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
const popupAddElement = document.querySelector('.popup_type_add');
const cardTemplate = document.querySelector('.card-template').content.querySelector('.grid__card');
const list = document.querySelector('.grid__list');
const popupImageElement = document.querySelector('.popup_type_image');
const imageCloseButton = document.querySelector('.form__close-button_image');




function togglePopupAdd() {
  if (popupAddElement.classList.contains('popup_opened')) {
    popupAddElement.classList.remove('popup_opened');
    inputTitle.value = "";
    inputLink.value = "";
  }else{
    popupAddElement.classList.add('popup_opened');
  }
}

function togglePopupEdit() {
  if (popupEditElement.classList.contains('popup_opened')) {
    popupEditElement.classList.remove('popup_opened');
  }else{
    popupEditElement.classList.add('popup_opened');
    name.value =  profileName.textContent;
    about.value =  profileAbout.textContent;
  }
}

function addCard(cardTitle, cardLink) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardImage = cardElement.querySelector('.grid__image');
  const cardName = cardElement.querySelector('.grid__name');
  const cardLikeButton = cardElement.querySelector('.grid__like');
  const cardDeleteButton = cardElement.querySelector('.grid__delete');

  cardName.textContent = cardTitle;
  cardImage.src = cardLink;
  cardImage.alt = cardTitle;

  list.prepend(cardElement);

  cardLikeButton.addEventListener('click',function(evt) {
    evt.target.classList.toggle('grid__like_on');
  });

  cardDeleteButton.addEventListener('click', function() {
    const deleteCard = cardDeleteButton.closest('.grid__card');
    deleteCard.remove();
    });

  const popupImage = document.querySelector('.popup__image');
  const popupCaption = document.querySelector('.popup__caption');
  console.log(popupCaption);

  cardImage.addEventListener('click', function() {
   popupImageElement.classList.toggle('popup_opened')
   popupImage.src = cardLink;
   popupImage.alt = cardTitle;
   popupCaption.textContent = cardTitle;
  });
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

initialCards.forEach(function (data) {
  addCard(data.name, data.link);
});

addButton.addEventListener('click', togglePopupAdd);
closeButtonAdd.addEventListener('click', togglePopupAdd);
editButton.addEventListener('click', togglePopupEdit);
closeButtonEdit.addEventListener('click', togglePopupEdit);
formEdit.addEventListener('submit', changeName);
formAdd.addEventListener('submit', takeData);
imageCloseButton.addEventListener('click', function() {
  popupImageElement.classList.toggle('popup_opened');
});



