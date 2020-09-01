export default class FormValidator {
  constructor(object, selector) {
    this._formSelector = object.formSelector,
    this._inputSelector = object.inputSelector,
    this._submitButtonSelector = object.submitButtonSelector,
    this._inactiveButtonClass = object.inactiveButtonClass,
    this._inputErrorClass = object.inputErrorClass,
    this._errorClass = object.errorClass,
    this._selector = selector
  }

  enableValidation() {
    document.querySelector(this._formSelector).addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }

  _setEventListeners() {

    const inputList = Array.from(this._selector.querySelectorAll(this._inputSelector));
    const buttonElement = this._selector.querySelector(this._submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {

        this._isValid(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }
  
  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.setAttribute("disabled", true);
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.removeAttribute("disabled", false);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _showInputError(inputElement, errorMessage) {
    inputElement.classList.add(this._inputErrorClass);  
    const errorElement = this._selector.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    inputElement.classList.remove(this._inputErrorClass);
    const errorElement = this._selector.querySelector(`#${inputElement.id}-error`);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

}




  
  