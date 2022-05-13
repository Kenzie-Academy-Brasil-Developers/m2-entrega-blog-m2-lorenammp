import Api from "./Api.js";

class Login {
    static userLoginForm () {
        const login = document.getElementById('loginForm');
        const form = document.createElement('form');
        const email = document.createElement('input');
        const password = document.createElement('input');
        const button = document.createElement('button');

        form.setAttribute('id', 'login-form');
        button.setAttribute('id', 'loginBtn');

        email.name = 'email';
        password.name = 'password';
        button.name = 'loginBtn';

        email.placeholder = 'Email';
        password.placeholder = 'Senha';
        button.innerText = 'Fazer login';

        form.append(email, password, button);
        login.append(form);
    }

    static getLoginData() {
        const loginForm = document.getElementById('login-form');
        loginForm.addEventListener('submit', this.logUser);
    }

    static logUser(event) {
        event.preventDefault();

        const formArr = [...event.target];
        const dataObj = {};
    
        formArr.forEach((element) => {
            if(element.name !== 'loginBtn') {
                dataObj[element.name] = element.value;
            }
        });
    
        Api.login(dataObj);
    }

    static createFormObj(event) {
        event.preventDefault();
        const formArr = [...event.target];
        const dataObj = {};
    
        formArr.forEach((element) => {
            if(element.name !== 'loginBtn') {
                dataObj[element.name] = element.value;
            }
        });
        return dataObj;
    }
}

Login.userLoginForm();
Login.getLoginData();