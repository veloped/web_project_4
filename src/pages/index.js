import Card from "/src/components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { settingsObject, initialCards, editButton, inputTitle, inputLink, addButton } from "../utils/constants.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import "/src/pages/index.css";

const api = new Api ({
  baseUrl: "https://around.nomoreparties.co/v1/group-6",
  headers: {
      authorization: "8291902b-8a53-40d3-b685-04332c2707d9",
      "Content-type": "application/json"
  }
});

const cardList = new Section ({
  items: [],   
  renderer: (data) => {
    const cardInstance = initiateCard(data);
    const cardElement = cardInstance.generateCard();
    cardList.addItem(cardElement);
  }
}, ".grid__list");
 
api.getCardList().then((res) => {
  const cardList = new Section ({
    items: res,   
    renderer: (data) => {
      const cardInstance = initiateCard(data);
      const cardElement = cardInstance.generateCard();
      cardList.addItem(cardElement);
    }
  }, ".grid__list");
  cardList.renderer();
  
}); 

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__about"
});

const addValidation = new FormValidator(settingsObject, document.querySelector(".form_add"));
addValidation.enableValidation();
const editValidation = new FormValidator(settingsObject, document.querySelector(".form_edit"));
editValidation.enableValidation();

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



const popupAdd = new PopupWithForm({
  popupSelector: ".popup_type_add",
  submitForm: (data) => { 

    const cardInstance = initiateCard(data);
    const cardElement = cardInstance.generateCard();
    cardList.addItem(cardElement);
    addValidation.resetForms();
    
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





addButton.addEventListener('click', () => {  
  popupAdd.open();
});


editButton.addEventListener('click', () => {  
  popupEdit.open();
}); 

