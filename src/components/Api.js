export default class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers; 
    }

    getCardList() {
        return fetch(this._baseUrl + '/cards', {
            headers: this._headers
        })
        .then((res) => {
            if (res.ok) {
              return res.json();
            }else{
            Promise.reject('Error #' + res.status);
            }
        })
        .catch((err) => console.log(err));

    }

}

