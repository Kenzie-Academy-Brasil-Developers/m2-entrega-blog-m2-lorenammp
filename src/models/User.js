import Api from "./Api.js";

class User { 
    static showUserInfo(userObj) {
        const header = document.getElementById('pageHeader');
        const userInfo = document.createElement('section');
        const userAvatar = document.createElement('div');
        const userImg = document.createElement('img');
        const userName = document.createElement('div');
        const logoutButton = document.createElement('button');
    
        userInfo.classList.add('user-info');
        userAvatar.classList.add('avatar');
        userImg.classList.add('avatar-img');
        logoutButton.setAttribute('id', 'logoutBtn');
        logoutButton.classList.add('logout-button');
    
        userImg.src = userObj.avatarUrl;
        userName.innerText = userObj.username;
        logoutButton.innerText = 'Logout';
    
        userAvatar.append(userImg);
        userInfo.append(userAvatar, userName);
        header.append(userInfo, logoutButton);
    }

    static logout() {
        const logoutButton = document.getElementById('logoutBtn');
        logoutButton.addEventListener('click', (event) => {
            localStorage.clear();
            window.location.assign(`./login.html`);
        });
    }
}

export default User