import { openImage } from "./utils.js";

export default class Card {
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

      

      _setEventListeners() {
        this._element.querySelector('.grid__like').addEventListener("click", () => {
          this._like();
        });
        this._element.querySelector('.grid__delete').addEventListener("click", () => {
          this._deleteCard();
        });
        this._element.querySelector('.grid__image').addEventListener("click", () => {
          openImage(this._name, this._link);
        });
     }
  }

 


 

  