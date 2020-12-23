export default class Card {
      constructor({ data, handleCardClick, handleDeleteClick, handleLikeClick }, userId, cardSelector) {
          this._name = data.name;
          this._link = data.link;
          this._likes = data.likes;
          this._handleCardClick = handleCardClick;
          this.isLiked = false;
          this._cardSelector = cardSelector;
          this._handleDeleteClick = handleDeleteClick;
          this._handleLikeClick = handleLikeClick;
          this._cardId = data._id;
          this._userId = userId;
          this._cardUser = data.owner._id;
      }

      getId() {
        
        return this._cardId;
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
        const deleteButton = this._element.querySelector('.grid__delete');


        this._setEventListeners();
        gridName.textContent = this._name;
        gridImage.src = this._link;
        gridImage.alt = this._name; 

        if (this._cardUser !== this._userId) {
          deleteButton.classList.add('grid__delete_hidden');
        };
        
        this._likes.forEach((item) => {
          if (item._id === this._userId) {
            this._isLiked = true;
            this._element.querySelector('.grid__like').classList.toggle('grid__like_on');
          }
        });
        cardLikes.textContent = this._likes.length;

        return this._element;
      }

      countLikes(value) {
        const cardLikes = this._element.querySelector('.grid__likes');
        cardLikes.textContent = value;

      }

      deleteCard() {
        this._element.querySelector('.grid__delete').closest('.grid__card').remove();
      }

      

      _setEventListeners() {
        this._element.querySelector('.grid__like').addEventListener("click", () => {
          this._handleLikeClick(this.getId());
        });
        this._element.querySelector('.grid__delete').addEventListener("click", () => {
          this._handleDeleteClick(this.getId());

        });
        this._element.querySelector('.grid__image').addEventListener("click", () => {
         this._handleCardClick(this._name, this._link)
        });
     }
  }

 


 

  