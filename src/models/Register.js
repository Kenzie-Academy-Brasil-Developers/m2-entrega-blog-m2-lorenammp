import Api from "./Api.js";

class Register {
    static registerForm() {
        const register = document.getElementById('registerForm');
        const form = document.createElement('form');
        const username = document.createElement('input')
        const email = document.createElement('input');
        const avatar = document.createElement('input');
        const password = document.createElement('input');
        const submitButton = document.createElement('button');

        form.setAttribute('id', 'register-form');

        username.placeholder = 'Nome de usuário';
        email.placeholder = 'Email';
        avatar.placeholder = 'Foto de perfil';
        password.placeholder = 'Senha';
        submitButton.innerText = 'Cadastrar';

        username.name = 'username';
        email.name = 'email';
        avatar.name = 'avatarUrl';
        password.name = 'password';
        submitButton.name = 'submitBtn';

        form.append(username, email, avatar, password, submitButton);
        register.append(form);
    }

    static getNewUserData() {
        const registerForm = document.getElementById('register-form');
        registerForm.addEventListener('submit', this.createNewUser);
    }

    static createNewUser(event) {
        event.preventDefault();

        const formArr = [...event.target];
        const dataObj = {};
    
        formArr.forEach((element) => {
            if(element.name !== 'submitBtn') {
                dataObj[element.name] = element.value;
            }
        });
    
        Api.createUser(dataObj);
    }

    static createFormObj(event) {
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
}

Register.registerForm();
Register.getNewUserData();

//export default Register