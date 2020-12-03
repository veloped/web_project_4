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



//initial cards 

const cardList = new Section ({
  items: initialCards,
  renderer: (item) => {

    const card = new Card({
      data: item,
      handleCardClick: (name, link) => {
        const openImagePopup = new PopupWithImage('.popup_type_image');
        openImagePopup.open(name, link);
        openImagePopup.setEventListeners();
      }
    }, ".card-template");
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
}, ".grid__list");

cardList.renderer();



//add card popup

addButton.addEventListener('click', () => {
  const openAddPopup = new PopupWithForm({
    popupSelector: ".popup_type_add",
    submitForm: (data) => {
      const card = new Card ({
        data: data,
        handleCardClick: (name, link) => {
          const openImagePopup = new PopupWithImage('.popup_type_image');
          openImagePopup.open(name, link);
          openImagePopup.setEventListeners();
        }
      }, ".card-template");
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
    }
  });
  
  inputTitle.value = "";
  inputLink.value = "";
  openAddPopup.open();
  openAddPopup.setEventListeners();
});


//edit popup 

editButton.addEventListener('click', () => {
  const openEditPopup = new PopupWithForm({
    popupSelector: ".popup_type_edit",
    submitForm: (data) => {
      console.log(data);
      profileName.textContent = data.name;
      profileAbout.textContent = data.about;
    }
  });
  openEditPopup.open();
  openEditPopup.setEventListeners();
});


//form validador

const formList = Array.from(document.querySelectorAll('.form'));
formList.forEach((item) => {
  const instance = new FormValidator(settingsObject, item);
  instance.enableValidation();
});

