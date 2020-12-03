import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { settingsObject, initialCards} from "../utils/constants.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";


const editButton = document.querySelector('.profile__edit');
const inputTitle = document.querySelector('.form__input_type_title');
const inputLink = document.querySelector('.form__input_type_link');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const addButton = document.querySelector('.profile__button');



const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

const popupAdd = new PopupWithForm({
  popupSelector: ".popup_type_add",
  submitForm: (data) => {
    const cardInstance = new Card({
      data: data,
      handleCardClick: (name, link) => {
      popupWithImage.open(name, link);      }
    }, ".card-template");
    const cardElement = cardInstance.generateCard();
    cardList.addItem(cardElement);
  }
});
popupAdd.setEventListeners();

const popupEdit = new PopupWithForm({
  popupSelector: ".popup_type_edit",
  submitForm: (data) => {
    console.log(data);
    profileName.textContent = data.name;
    profileAbout.textContent = data.about;
  }
});
popupEdit.setEventListeners();


//initial cards 

const cardList = new Section ({
  items: initialCards,
  renderer: (data) => {
    const cardInstance = new Card({
      data: data,
      handleCardClick: (name, link) => {
      popupWithImage.open(name, link);      }
    }, ".card-template");
    
    const cardElement = cardInstance.generateCard();
    cardList.addItem(cardElement);
  }
}, ".grid__list");

cardList.renderer();


addButton.addEventListener('click', () => {  
  inputTitle.value = "";
  inputLink.value = "";
  popupAdd.open();
});



editButton.addEventListener('click', () => {  
  popupEdit.open();
});


//form validador

const formList = Array.from(document.querySelectorAll('.form'));
formList.forEach((item) => {
  const instance = new FormValidator(settingsObject, item);
  instance.enableValidation();
});

