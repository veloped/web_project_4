export default class Card {
      constructor({ data, handleCardClick, handleDeleteClick }, cardSelector) {
          this._name = data.name;
          this._link = data.link;
          this._likes = data.likes;
          this._handleCardClick = handleCardClick;
          this.isLiked = false;
          this._cardSelector = cardSelector;
          this._handleDeleteClick = handleDeleteClick;
          this._id = data._id;
      }

      getId() {
        return this._id;
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
        const gridName = this._element.querySelector('.grid__name');
        const gridImage = this._element.querySelector('.grid__image');
        const cardLikes = this._element.querySelector('.grid__likes');

        this._setEventListeners();
        gridName.textContent = this._name;
        gridImage.src = this._link;
        gridImage.alt = this._name;
        cardLikes.textContent = this._likes.length;
        return this._element;
      }

      _like() {
        this._element.querySelector('.grid__like').classList.toggle('grid__like_on');
        
        this.isLiked = !this.isLiked;
      }

      deleteCard() {
        this._element.querySelector('.grid__delete').closest('.grid__card').remove();
      }

      

      _setEventListeners() {
        this._element.querySelector('.grid__like').addEventListener("click", () => {
          this._like();
        });
        this._element.querySelector('.grid__delete').addEventListener("click", () => {
          this._handleDeleteClick();

        });
        this._element.querySelector('.grid__image').addEventListener("click", () => {
         this._handleCardClick(this._name, this._link)
        });
     }
  }

 


 

  