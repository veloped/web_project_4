import { togglePopup, popupImageElement, popupAddElement } from "./index.js";
export const initialCards = [
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

  export class Card {
      constructor(data, cardSelector) {
          this._name = data.name;
          this._link = data.link;
          this.isLiked = false;
          this._cardSelector = cardSelector;
      }

      _getTemplate() {
        const cardTemplate = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.grid__card')
        .cloneNode(true);

        return cardTemplate;
      }

      generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.grid__name').textContent = this._name;
        this._element.querySelector('.grid__image').src = this._link;
        this._element.querySelector('.grid__image').alt = this._name;
       

        return this._element;
      }

      _like() {
        this._element.querySelector('.grid__like').classList.toggle('grid__like_on');
        this.isLiked = !this.isLiked;
      }

      _deleteCard() {
        this._element.querySelector('.grid__delete').closest('.grid__card').remove();
      }

      _openImage() {
        const popupImage = document.querySelector('.popup__image');
        const popupCaption = document.querySelector('.popup__caption');
        togglePopup(popupImageElement);
        popupImage.src = this._link;
        popupImage.alt = this._name;
        popupCaption.textContent = this._name;
      }

      _setEventListeners() {
        this._element.querySelector('.grid__like').addEventListener("click", () => {
          this._like();
        });
        this._element.querySelector('.grid__delete').addEventListener("click", () => {
          this._deleteCard();
        });
        this._element.querySelector('.grid__image').addEventListener("click", () => {
          this._openImage();
        });
     }
  }


 

  export function handleCardData() {
      const data = {};
      data.name = document.querySelector('.form__input_type_title').value;
      data.link = document.querySelector('.form__input_type_link').value;
      const card = new Card(data, ".card-template");
      const cardElement = card.generateCard();
      document.querySelector('.grid__list').prepend(cardElement);
      togglePopup(popupAddElement);
  }