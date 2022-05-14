import Api from "./models/Api.js";
import Cards from "./models/Card.js";
import User from "./models/User.js";
import Posts from "./models/Posts.js"

async function loggedUser() {
    const id = localStorage.getItem('userId');
    const userObj = await Api.getUser(id);

    User.showUserInfo(userObj);
    User.logout();
    
    await Api.listPosts('page=1');
    const postObj = JSON.parse(localStorage.getItem('Posts'));
    
    Posts.postArea();

    Posts.getPost();

    Cards.showCards(postObj, id);

    Posts.postPagination(postObj, id);
}

loggedUser();

Cards.generateCard('01/01/2022');
Cards.generateCard('31/12/2021');