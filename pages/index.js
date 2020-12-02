import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { settingsObject, initialCards} from "../utils/constants.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";


//var declarations 
const editButton = document.querySelector('.profile__edit');
const popupEditElement = ('.popup_type_edit');
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



const cardList = new Section ({
  items: initialCards,
  renderer: (item) => {
    const card = new Card({
      data: item,
      handleCardClick: (name, link) => {
        const openPopup = new PopupWithImage('.popup_type_image');
        openPopup.open(name, link);
        openPopup.setEventListeners();//
      }
    }, ".card-template");
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
}, ".grid__list");

cardList.renderer();









 
function changeProfileData() {
   profileName.textContent = name.value;
   profileAbout.textContent = about.value;
 
   togglePopup(popupEditElement);
}



//pressing enter at any point while filling out forms will submit them
/*form.addEventListener("submit", (evt) => {
  evt.preventDefault();
});*/

//event listeners for buttons:
addButton.addEventListener('click', () => {
  togglePopup(popupAddElement)
  inputTitle.value = "";
  inputLink.value = "";
});



editButton.addEventListener('click', () => {
  togglePopup(popupEditElement);
});



formEdit.addEventListener('submit', (evt) =>  {
  evt.preventDefault();
  changeProfileData();
});

formAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  handleCardData()
});


//Iteration over initial cards with Card class instances




//creating a new card through Card class
function handleCardData() {
  const data = {};
  data.name = document.querySelector('.form__input_type_title').value;
  data.link = document.querySelector('.form__input_type_link').value;
  const card = new Card(data, ".card-template");
  const cardElement = card.generateCard();
  document.querySelector('.grid__list').prepend(cardElement);
  togglePopup(popupAddElement);
}



const formList = Array.from(document.querySelectorAll('.form'));
formList.forEach((item) => {
  const instance = new FormValidator(settingsObject, item);
  instance.enableValidation();
});

