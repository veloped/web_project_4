export default class UserInfo {
    constructor({ nameSelector, jobSelector, avatarSelector }) {
        this._name = document.querySelector(nameSelector);
        this._job = document.querySelector(jobSelector);
        this._avatar = document.querySelector(avatarSelector);
        this._id = null;
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            about: this._job.textContent,
            avatar: this._avatar.style,
            id: this._id
        }
    }

    setUserInfo({newName, newJob, newId}) {
        this._name.textContent = newName;
        this._job.textContent = newJob;
        this._id = newId;
    }

    setUserPic(newAvatar) {
        this._avatar.style = `background-image: url('${newAvatar}')`;
    }
}