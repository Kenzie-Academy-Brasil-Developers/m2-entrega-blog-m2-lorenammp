import Api from "./Api.js";
import Cards from "./Card.js";

class Posts {
    static postArea() {
        const addPost = document.getElementById('postSection');
        const postArea = document.createElement('textarea');
        const postButton = document.createElement('button');

        postArea.classList.add('area-post');
        postArea.setAttribute('id', 'postArea');
        postButton.setAttribute('id', 'postBtn');
        postButton.classList.add('post-button');

        postArea.placeholder = 'Comece seu post incrível!';
        postButton.innerText = '+'

        addPost.append(postArea, postButton);
    }

    static getPost() {
        const postButton = document.getElementById('postBtn');
        postButton.addEventListener('click', this.addPost);
    }

    static addPost(event) {
        const postArea = document.getElementById('postArea');
        const postObj = {};
        postObj.content = postArea.value;
        Api.createPost(postObj);
    }

    static editPostArea(id) {
        const post = document.getElementById('post-' + id);
        const editPost = document.createElement('div');
        const editArea = document.createElement('textarea');
        const editButton = document.createElement('button');

        editPost.classList.add('edit-post');
        editPost.setAttribute('id', 'edit-post-' + id)
        editArea.classList.add('edit-area');
        editArea.setAttribute('id', 'editPost-' + id);
        editButton.classList.add('edit-post-button');
        editButton.setAttribute('id', 'edit-btn-' + id);

        editPost.style.display = 'none';
        editButton.innerText = '+';

        editPost.append(editArea, editButton);
        post.append(editPost);

        this.editPosts(id);
    }

    static editPosts(id) {
        const editButton = document.getElementById('edit-' + id);

        editButton.addEventListener('click', (event) => {
            const editPost = document.getElementById('edit-post-' + id);

            if(editPost.style.display === 'none') {
                editPost.style.display = 'block';

                const post = document.getElementById('text-' + id);
                const editArea = document.getElementById('editPost-' + id);

                editArea.value = post.innerText;
                this.submitEditedPost(id);
            }
            else {
                editPost.style.display = 'none';
            }
        })
    }

    static submitEditedPost(id) {
        const editButton = document.getElementById('edit-btn-' + id);

        editButton.addEventListener('click', (event) => {
            const editArea = document.getElementById('editPost-' + id);
            const editedPost = {};
            editedPost.newContent = editArea.value;
            Api.editPost(id, editedPost);
        })
    }

    static postPagination(postObj, id) {
        const cardSection = document.getElementById('postPagination');
        
        const leftArrow = document.createElement('li');
        const leftIcon = document.createElement('i');
        const rightArrow = document.createElement('li');
        const rightIcon = document.createElement('i');

        leftIcon.classList.add('fa-solid', 'fa-angles-left');
        leftIcon.setAttribute('id', 'leftArrow');
        rightIcon.classList.add('fa-solid', 'fa-angles-right');
        rightIcon.setAttribute('id', 'rightArrow');

        leftArrow.append(leftIcon);
        rightArrow.append(rightIcon);
        cardSection.append(leftArrow, rightArrow);

        this.pageNavigation(postObj, id)
    }

    static async pageNavigation(postObj, id) {
        const left = document.getElementById('leftArrow');
        left.addEventListener('click', (event) => {
            this.loadNewPage(id, 'previousPage');
        });

        const right = document.getElementById('rightArrow');
        right.addEventListener('click', (event) => {
            this.loadNewPage(id, 'nextPage');
        })
    }

    static async loadNewPage(id, page) {  

        if(page !== null) {
            const newPosts = JSON.parse(localStorage.getItem('Posts'));
            await Api.listPosts(newPosts[page]);
            const posts = JSON.parse(localStorage.getItem('Posts'));
            console.log(posts)

            this.cleanPosts();
            Cards.showCards(posts, id);
        }
    }

    static cleanPosts() {
        const cardSection = document.getElementById('cardSection');
        cardSection.replaceChildren();
    }
}

export default Posts