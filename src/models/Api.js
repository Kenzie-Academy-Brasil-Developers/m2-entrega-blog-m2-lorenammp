import Redirect from "./Redirect.js";
import Warning from "./Warning.js";

class Api {
    static errorRegister = {
        title: 'Cadastro não efetuado',
        message: 'Todos os campos devem ser preenchidos corretamente',
        error: 'error'
    };

    static errorLogin = {
        title: 'Não foi possível fazer login',
        message: 'E-mail ou senha não foram inseridos corretamente. É necessário inserir os dados corretos e estar cadastro para realizar login.',
        error: 'error'
    }

    static async createUser(userData) {
        const response = await fetch('https://api-blog-m2.herokuapp.com/user/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData)
        })
        .then((res) => res.json())
        .then((res) => {
            if(res.status == 'error') {
                Warning.modal(this.errorRegister);
            }
            else {
                Redirect.redirectPage('login.html');
            }
            res
        })
        .catch((error) => console.log(error));

        return response;
    }

    static async login(userData) {
        const response = await fetch('https://api-blog-m2.herokuapp.com/user/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData)
        })
        .then((res) => res.json())
        .then((res) => {
            if(res.status === 'error') {
                Warning.modal(this.errorLogin);
            }
            else {
                localStorage.setItem('Token', res.token)
                localStorage.setItem('userId', res.userId)
                Redirect.redirectPage('main.html');
            }
        })
        .catch((error) => console.log(error));
    }

    static async getUser(id) {
        const response = await fetch('https://api-blog-m2.herokuapp.com/user/'+id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('Token')}`
            }
        })
        .then((res) => res.json())
        .then((res) => res)
        .catch((error) => console.log(error));

        return response;
    }

    static async listPosts(page) {
        const response = await fetch('https://api-blog-m2.herokuapp.com/post?'+page, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('Token')}`
            }
        })
        .then((res) => res.json())
        .then((res) => {
            localStorage.setItem('Posts', JSON.stringify(res));
            res
        })
        .catch((error) => console.log(error));

        return response;
    }

    static async createPost(post) {
        const response = await fetch('https://api-blog-m2.herokuapp.com/post', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('Token')}`
            },
            body: JSON.stringify(post),
        })
        .then((res) => res.json())
        .then((res) => {
            location.reload();
            res
        })
        .catch((error) => console.log(error));

        return response;
    }

    static async deletePost(id) {
        const response = await fetch('https://api-blog-m2.herokuapp.com/post/'+id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('Token')}`
            }
        })
        .then((res) => {
            location.reload();
            res
        })
        .catch((error) => console.log(error));
    }

    static async editPost(id, data) {
        const response = await fetch('https://api-blog-m2.herokuapp.com/post/'+id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('Token')}`
            },
            body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((res) => {
            location.reload();
            res
        })
        .catch((error) => console.log(error));

        return response;
    }
}

export default Api