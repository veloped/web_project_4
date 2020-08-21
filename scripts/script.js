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
const addButton = document.querySelector('.profile__button');
const popupAddElement = document.querySelector('.popup_type_add');
const cardTemplate = document.querySelector('.card-template').content.querySelector('.grid__card');
const list = document.querySelector('.grid__list');
const popupImageElement = document.querySelector('.popup_type_image');
const imageCloseButton = document.querySelector('.form__close-button_image');
const form = document.querySelector(".form");
const formInput = form.querySelector(".form__input");
const formError = form.querySelector(`#${formInput.id}-error`);

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

function togglePopup(element) {
  element.classList.toggle('popup_opened');
}
 
function changeProfileData() {
   event.preventDefault();
 
   profileName.textContent = name.value;
   profileAbout.textContent = about.value;
 
   togglePopup(popupEditElement);
}

function handleCardData() {
  event.preventDefault();
 
  const title = inputTitle.value;
  const link = inputLink.value;
  
  list.prepend(addCard(title, link));
  togglePopup(popupAddElement);
}
 
function addCard(cardTitle, cardLink) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.grid__image');
  const cardName = cardElement.querySelector('.grid__name');
  const cardLikeButton = cardElement.querySelector('.grid__like');
  const cardDeleteButton = cardElement.querySelector('.grid__delete');
  const popupImage = document.querySelector('.popup__image');
  const popupCaption = document.querySelector('.popup__caption');
 
 
  cardName.textContent = cardTitle;
  cardImage.src = cardLink;
  cardImage.alt = cardTitle;
 
 
 
  cardLikeButton.addEventListener('click',function(evt) {
    evt.target.classList.toggle('grid__like_on');
  });
 
  cardDeleteButton.addEventListener('click', function() {
    const deleteCard = cardDeleteButton.closest('.grid__card');
    deleteCard.remove();
  });
 
 
  cardImage.addEventListener('click', function () {
    togglePopup(popupImageElement);
    popupImage.src = cardLink;
    popupImage.alt = cardTitle;
    popupCaption.textContent = cardTitle;
  });
 
    return cardElement;
 }
 

 
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("form__button_disabled");
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove("form__button_disabled");
    buttonElement.removeAttribute("disabled", false);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const showInputError = (formElement, inputElement, errorMessage) => {
  inputElement.classList.add("form__input_type_error");  
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
  
};

const hideInputError = (formElement, inputElement) => {
  inputElement.classList.remove("form__input_type_error");
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
  
};

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll(".form__input"));
  const buttonElement = formElement.querySelector(".form__button");
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
}

function enableValidation() {
  const formList = Array.from(document.querySelectorAll(".form"));
  formList.forEach((formElement) => {
  formElement.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });
  setEventListeners(formElement);
});
}

enableValidation();


form.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

formInput.addEventListener("input", function() {
  isValid(form, formInput);
});

initialCards.forEach(function (data) {
  list.prepend(addCard(data.name, data.link));

});

addButton.addEventListener('click', function () {
  togglePopup(popupAddElement)
  inputTitle.value = "";
  inputLink.value = "";
});

closeButtonAdd.addEventListener('click', function () {
  togglePopup(popupAddElement)
});

editButton.addEventListener('click', function () {
  togglePopup(popupEditElement)
  name.value =  profileName.textContent;
  about.value =  profileAbout.textContent;
  enableValidation();
});

closeButtonEdit.addEventListener('click', function () {
  togglePopup(popupEditElement)
});

formEdit.addEventListener('submit', changeProfileData);
formAdd.addEventListener('submit', handleCardData);

imageCloseButton.addEventListener('click', function () {
  togglePopup(popupImageElement);
});



