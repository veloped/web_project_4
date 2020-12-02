export default class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener("keydown", this._handleEscClose);
    }

    
    close() {
        console.log('popup closed');
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener("keydown", this._handleEscClose);

    }

    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close();
        }

    }

    setEventListeners() {
        console.log("listenersSet");
        this._popupElement.addEventListener("click", (evt) => {
            if((evt.target === document.querySelector('.popup__close-button')) || (!evt.target.closest('.form')) || (!evt.target.closest('.popup__content'))) {   
            this.close();
            }
        });
    }
}

