class Api {
    static async createUser(userData) {
        const response = await fetch('https://api-blog-m2.herokuapp.com/user/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData)
        })
        .then((res) => res.json())
        .then((res) => res)
        .catch((error) => error);

        console.log(response)
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
        .then((res) => localStorage.setItem('Token', res))
        .catch((error) => console.log(error));
    }
}

export default Api