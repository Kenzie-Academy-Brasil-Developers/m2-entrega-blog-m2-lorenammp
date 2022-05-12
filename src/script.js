import Api from "./models/Api.js";

function createFormObj(event) {
    event.preventDefault();
    const formArr = [...event.target];
    const dataObj = {};

    formArr.forEach((element) => {
        if(element.name !== 'submitBtn') {
            dataObj[element.name] = element.value;
        }
    });
    return dataObj;
}

function getNewUserData() {
    const registerForm = document.getElementById('register-form');
    registerForm.addEventListener('submit', createNewUser);
}

function createNewUser(event) {
    const userObj = createFormObj(event);

    return Api.createUser(userObj);
}

function getLoginData() {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', logUser);
}

function logUser(event) {
    event.preventDefault();
    const formArr = [...event.target];
    const dataObj = {}
    formArr.forEach((element) => {
        if(element.name !== 'loginBtn') {
            dataObj[element.name] = element.value;
        }
    });

    return dataObj;
}

async function verifyUser() {
    const userRegister = await getNewUserData();
    console.log(userRegister);
}

verifyUser();

//getLoginData();