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

    getIUserInfo() {
        return fetch(this._baseUrl + '/users/me', {
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

    addCard({name, link}) {
        return fetch(this._baseUrl + '/cards', {
            headers: this._headers,
            method: "POST",
            body: JSON.stringify({name, link})
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

    setUserInfo({name, about}) {
        fetch(this._baseUrl + '/users/me', {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({name, about})
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

    setUserAvatar(avatar) {
        console.log("tut", avatar);
        fetch(this._baseUrl + '/users/me/avatar', {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({avatar: avatar.link})
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

