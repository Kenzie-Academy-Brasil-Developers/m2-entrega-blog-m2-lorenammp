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
        email.placeholder = 'seuemail@provedor.com';
        avatar.placeholder = 'Envia a url da imagem desejada';
        password.placeholder = 'Digite uma senha';
        submitButton.innerText = 'Criar novo usuário';

        username.name = 'username';
        email.name = 'email';
        avatar.name = 'avatarUrl';
        password.name = 'password';
        submitButton.name = 'submitBtn';

        form.append(username, email, avatar, password, submitButton);
        register.append(form);
    }
}

Register.registerForm();

//export default Register