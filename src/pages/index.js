import Card from "/src/components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { settingsObject, editButton, addButton, editAvatarButton } from "../utils/constants.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import "/src/pages/index.css";



const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__about",
  avatarSelector: ".profile__avatar"
});



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



const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

const popupDelete = new PopupWithForm({
  popupSelector: ".popup_type_delete"
});
popupDelete.setEventListeners();


const popupAvatar = new PopupWithForm({
  popupSelector: ".popup_type_edit-avatar",
  submitForm: (data) => {
    userInfo.setUserPic(data.link);
    api.setUserAvatar(data);
  }
});
popupAvatar.setEventListeners();
editAvatarButton.addEventListener("click", () => {
  popupAvatar.open();
});



const popupAdd = new PopupWithForm({
  popupSelector: ".popup_type_add",
  submitForm: (data) => { 
    api.addCard(data).then((res) => {
      const cardInstance = initiateCard(res);
      const cardElement = cardInstance.generateCard();
      cardList.addItem(cardElement);
      addValidation.resetForms();
    }) 
  }
});
popupAdd.setEventListeners();
addButton.addEventListener('click', () => {  
  popupAdd.open();
});



const popupEdit = new PopupWithForm({
  popupSelector: ".popup_type_edit",
  submitForm: (data) => {
    userInfo.setUserInfo({newName: data.name, newJob: data.about});
    api.setUserInfo(data);
  }
});
popupEdit.setEventListeners();
editButton.addEventListener('click', () => {  
  popupEdit.open();
}); 



const addValidation = new FormValidator(settingsObject, document.querySelector(".form_add"));
addValidation.enableValidation();
const editValidation = new FormValidator(settingsObject, document.querySelector(".form_edit"));
editValidation.enableValidation();
const avatarValidation = new FormValidator(settingsObject, document.querySelector(".form_avatar"));
avatarValidation.enableValidation();
 


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



api.getIUserInfo().then((res) => {
  userInfo.setUserInfo({newName: res.name, newJob: res.about});
  userInfo.setUserPic(res.avatar);
})



function initiateCard(data) {
  const cardInstance = new Card({ 
    data: data,
    handleCardClick: (name, link) => {
    popupWithImage.open(name, link);      
    },
    handleDeleteClick: () => {
      popupDelete.open(cardInstance.getId());
      popupDelete.submitForm(() => {
        api.deleteCard(cardInstance.getId());
        cardInstance.deleteCard();
      })
    }
  }, ".card-template"); 
  return cardInstance;
}






