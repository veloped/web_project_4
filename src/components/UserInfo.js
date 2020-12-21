export default class UserInfo {
    constructor({ nameSelector, jobSelector, avatarSelector }) {
        this._name = document.querySelector(nameSelector);
        this._job = document.querySelector(jobSelector);
        this._avatar = document.querySelector(avatarSelector);
    }

    getUserInfo() {

        const userInfo = {};
        userInfo.name = this._name.textContent;
        userInfo.job = this._job.textContent;
        return userInfo;
    }

    setUserInfo({newName, newJob}) {
        this._name.textContent = newName;
        this._job.textContent = newJob;
    }

    setUserPic(newAvatar) {
        this._avatar.style = `background-image: url('${newAvatar}')`;
    }
}