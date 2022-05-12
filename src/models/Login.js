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

        email.placeholder = 'seuemail@provedor.com';
        password.placeholder = 'Digite sua senha';
        button.innerText = 'Fazer login';

        form.append(email, password, button);
        login.append(form);
    }
}

Login.userLoginForm();