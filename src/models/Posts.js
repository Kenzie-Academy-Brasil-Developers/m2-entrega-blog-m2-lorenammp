import Api from "./Api.js";

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
        //location.reload();
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

    static async postPagination() {
        const cardSection = document.getElementById('cardSection');
        const cardPages = document.createElement('ul');

        await Api.listPosts(1);
        const postObj = JSON.parse(localStorage.getItem('Posts'));

        for(let i = postObj.page; i < postObj.lastPage; i++) {
            const page = document.createElement('li');
            page.innerText = i;

            if(i > 5) {
                const page = document.createElement('li');
                page.innerText = '...';

                const lastpage = document.createElement('li');
                page.innerText = postObj.lastPage;

                cardPages.append(page, lastpage);
                break;
            }

            cardPages.append(page);
        }

        cardSection.append(cardPages);
    }
}

export default Posts