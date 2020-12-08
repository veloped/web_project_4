import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, submitForm}) {
        super(popupSelector);
        this._submitForm = submitForm;
    }

    _getInputValues() {
        this._inputList = this._popupElement.querySelectorAll(".form__input");
        this._formValues = {};
        this._inputList.forEach(input => {
           this._formValues[input.name] = input.value;
        });
        return this._formValues;
    } 

    setEventListeners() {
        super.setEventListeners();
        this._popupElement.querySelector('.form__button').addEventListener('click', (evt) => {
            evt.preventDefault();
            this._submitForm(this._getInputValues());
            this.close();
        }); 
    }
} 