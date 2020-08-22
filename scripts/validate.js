function setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(".form__input"));
    const buttonElement = formElement.querySelector(".form__button");
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        isValid(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  }
  
  function enableValidation() {
    const formList = Array.from(document.querySelectorAll(".form"));
    formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
  }
   
  const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add("form__button_disabled");
      buttonElement.setAttribute("disabled", true);
    } else {
      buttonElement.classList.remove("form__button_disabled");
      buttonElement.removeAttribute("disabled", false);
    }
  };
  
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };
  
  const showInputError = (formElement, inputElement, errorMessage) => {
    inputElement.classList.add("form__input_type_error");  
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add("form__input-error_active");
    
  };
  
  const hideInputError = (formElement, inputElement) => {
    inputElement.classList.remove("form__input_type_error");
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.classList.remove("form__input-error_active");
    errorElement.textContent = "";
    
  };
  
  const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };
  
  enableValidation();
  