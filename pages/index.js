import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { settingsObject, initialCards} from "../utils/constants.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";


//var declarations 
const editButton = document.querySelector('.profile__edit');
const popupEditElement = ('.popup_type_edit');
const formEdit = document.querySelector('.form_edit');
const inputTitle = document.querySelector('.form__input_type_title');
const inputLink = document.querySelector('.form__input_type_link');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const name = document.querySelector('.form__input_type_name');
const about = document.querySelector('.form__input_type_about');
const addButton = document.querySelector('.profile__button');



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

//event listener that will open the ADD CARD 

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




editButton.addEventListener('click', () => {
  togglePopup(popupEditElement);
});



formEdit.addEventListener('submit', (evt) =>  {
  evt.preventDefault();
  changeProfileData();
});




//Iteration over initial cards with Card class instances




//creating a new card through Card class
// function handleCardData() {
//   const data = {};
//   data.name = document.querySelector('.form__input_type_title').value;
//   data.link = document.querySelector('.form__input_type_link').value;
//   const card = new Card(data, ".card-template");
//   const cardElement = card.generateCard();
//   document.querySelector('.grid__list').prepend(cardElement);
//   togglePopup(popupAddElement);
// }



const formList = Array.from(document.querySelectorAll('.form'));
formList.forEach((item) => {
  const instance = new FormValidator(settingsObject, item);
  instance.enableValidation();
});

