export default class UserInfo {
    constructor({ nameSelector, jobSelector }) {
        this._name = document.querySelector(nameSelector);
        this._job = document.querySelector(jobSelector);
    }

    getUserInfo() {

        const userInfo = {};
        userInfo.name = this._name.textContent;
        userInfo.job = this._job.textContent;
        return userInfo;
    }

    setUsetInfo(newName, newJob) {
        this._name.textContent = newName;
        this._job.textContent = newJob;
    }
}