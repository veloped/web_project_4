import Card from "/src/components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { settingsObject, initialCards, editButton, inputTitle, inputLink, addButton } from "../utils/constants.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import "/src/pages/index.css";


const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__about"
});


const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

function initiateCard(data) {
  const cardInstance = new Card({ 
    data: data,
    handleCardClick: (name, link) => {
    popupWithImage.open(name, link);      
    }
  }, ".card-template"); 
  return cardInstance;
}

function enableValidator(item) {
  const instance = new FormValidator(settingsObject, item);
  return instance;
}

const popupAdd = new PopupWithForm({
  popupSelector: ".popup_type_add",
  submitForm: (data) => {
    const cardInstance = initiateCard(data);
    const cardElement = cardInstance.generateCard();
    cardList.addItem(cardElement);
  }
});
popupAdd.setEventListeners();


const popupEdit = new PopupWithForm({
  popupSelector: ".popup_type_edit",
  submitForm: (data) => {
    userInfo.setUserInfo(data.name, data.about);
  }
});
popupEdit.setEventListeners();


const cardList = new Section ({
  items: initialCards,
  renderer: (data) => {
    const cardInstance = initiateCard(data);
    const cardElement = cardInstance.generateCard();
    cardList.addItem(cardElement);
  }
}, ".grid__list");
cardList.renderer();


addButton.addEventListener('click', () => {  
  const instance = enableValidator(document.querySelector(".form_add"));
  instance.resetForms();
  popupAdd.open();
});


editButton.addEventListener('click', () => {  
  popupEdit.open();
});



const formList = Array.from(document.querySelectorAll('.form'));
formList.forEach((item) => {
  const instance = enableValidator(item);
  instance.enableValidation();
});


