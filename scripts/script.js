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


/*button.addEventListener(
  "click",
  function (e) {
    if (box.classList.contains("box-active")) {
      // hide
      box.classList.remove("box-active");
      box.classList.add("box-transition");
      box.classList.add("box-hidden");
    } else {
      // show
      box.classList.add("box-visible");
      box.clientWidth;
      box.classList.add("box-transition");
      box.classList.add("box-active");
    }
  },
  false
);*/


function togglePopupAdd() {
  if (popupAddElement.classList.contains('popup_opened')) {
    popupAddElement.classList.remove('popup_active');
    popupAddElement.classList.add('popup_transition');
    popupAddElement.classList.add('popup_hidden');
    popupAddElement.classList.remove("popup_opened");
    popupAddElement.addEventListener("transitionend", function () {
      popupAddElement.classList.remove('popup_transition');
      popupAddElement.classList.remove("popup_hidden");
    });
    inputTitle.value = "";
    inputLink.value = "";
  }else{
    popupAddElement.classList.add('popup_opened');
    popupAddElement.clientWidth;
    popupAddElement.classList.add('popup_transition');
    popupAddElement.classList.add('popup_active');
  };
}

function togglePopupEdit() {
  if (popupEditElement.classList.contains('popup_opened')) {
    popupEditElement.classList.remove('popup_active');
    popupEditElement.classList.add('popup_transition');
    popupEditElement.classList.add('popup_hidden');
    popupEditElement.classList.remove("popup_opened");
    popupEditElement.addEventListener("transitionend", function () {
      popupEditElement.classList.remove('popup_transition');
      popupEditElement.classList.remove("popup_hidden");
    });

  }else{
    popupEditElement.classList.add('popup_opened');
    popupEditElement.clientWidth;
    popupEditElement.classList.add('popup_transition');
    popupEditElement.classList.add('popup_active');
    name.value =  profileName.textContent;
    about.value =  profileAbout.textContent;
  };
}




/*function togglePopupEdit() {
  if (popupEditElement.classList.contains('popup_opened')) {
    popupEditElement.classList.remove('popup_opened');
  }else{
    popupEditElement.classList.add('popup_opened');
    name.value =  profileName.textContent;
    about.value =  profileAbout.textContent;
  }
}*/

function addCard(cardTitle, cardLink) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardImage = cardElement.querySelector('.grid__image');
  const cardName = cardElement.querySelector('.grid__name');
  const cardLikeButton = cardElement.querySelector('.grid__like');
  const cardDeleteButton = cardElement.querySelector('.grid__delete');
  const imageCloseButton = document.querySelector('.form__close-button_image');


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

  function togglePopupImage () {
    if (popupImageElement.classList.contains('popup_opened')) {
      popupImageElement.classList.remove('popup_active');
      popupImageElement.classList.add('popup_transition');
      popupImageElement.classList.add('popup_hidden');
      popupImageElement.addEventListener("transitionend", function () {
        popupImageElement.classList.remove("popup_opened");

        popupImageElement.classList.remove('popup_transition');
        popupImageElement.classList.remove("popup_hidden");
      });
   } else {
      popupImageElement.classList.add('popup_opened');
      popupImageElement.clientWidth;
      popupImageElement.classList.add('popup_transition');
      popupImageElement.classList.add('popup_active');
      popupImage.src = cardLink;
      popupImage.alt = cardTitle;
      popupCaption.textContent = cardTitle;

    }
  };
  cardImage.addEventListener('click', togglePopupImage);

  imageCloseButton.addEventListener('click',togglePopupImage);

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




