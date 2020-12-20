import Popup from "./Popup.js";

export default class DeletePopup extends Popup {
    constructor({ popupSelector, confirmDelete}) {
        super(popupSelector);
        this._confirmDelete = confirmDelete;
    }

    open(id){
        super.open();
        this._id = id;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupElement.querySelector('.form__button').addEventListener('click', (evt) => {
            evt.preventDefault();
             this._confirmDelete(this._id);
            this.close();
        }); 
    }
}  