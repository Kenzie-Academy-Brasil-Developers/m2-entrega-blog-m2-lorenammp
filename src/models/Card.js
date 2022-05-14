import Api from "./Api.js";
import Posts from "./Posts.js";

class Cards {
    static showCards(postObj, id) {
        postObj.data.forEach((element) => {
            this.generateCard(element, id);
        });
    }

    static generateCard(postObj, userId) {
        const cardSection = document.getElementById('cardSection');
        const cardMain = document.createElement('li');
        const cardContent = document.createElement('div'); 
        const cardImg = document.createElement('img');
        const cardPost = document.createElement('div');
        const cardAuthor = document.createElement('h3');
        const cardText = document.createElement('div');
        const cardInfo = document.createElement('div');
        const cardModify = document.createElement('div');
        const cardDate = document.createElement('div');

        const date = new Date(postObj.createdAt);

        cardMain.classList.add('card');
        cardMain.setAttribute('id', 'post-' + postObj.id);
        cardContent.classList.add('card-content');
        cardImg.classList.add('card-img');
        cardPost.classList.add('card-post');
        cardText.classList.add('card-text');
        cardText.setAttribute('id', 'text-' + postObj.id);
        cardInfo.classList.add('card-info');
        cardModify.classList.add('card-author-edit');
        
        
        cardDate.classList.add('card-date');

        cardImg.src = postObj.owner.avatarUrl;
        cardAuthor.innerText = postObj.owner.username;
        cardText.innerText += postObj.post;
        cardDate.innerText = `Postado em: ${date.getDay()}/${date.getDate()}/${date.getFullYear()}`;

        cardPost.append(cardAuthor, cardText);
        cardContent.append(cardImg, cardPost);
        
        if(postObj.owner.id === userId) {
            const cardEdit = document.createElement('div');
            const cardDelete = document.createElement('div');
            cardDelete.classList.add('card-delete');
            cardDelete.setAttribute('id', 'delete-' + postObj.id);
            cardEdit.setAttribute('id', 'edit-' + postObj.id);
            cardEdit.classList.add('card-edit');

            cardEdit.innerText = 'Editar';
            cardDelete.innerText = 'Apagar';

            cardModify.append(cardEdit, cardDelete);
            cardInfo.append(cardDate, cardModify);
            cardMain.append(cardContent, cardInfo);
            cardSection.append(cardMain);
            this.deleteBtn(postObj.id);
            Posts.editPostArea(postObj.id);
        }
        else {
            cardInfo.append(cardDate);
            cardMain.append(cardContent, cardInfo);
            cardSection.append(cardMain);
        }        
    }

    static deleteBtn(id) {
        const deleteBtn = document.getElementById(`delete-${id}`);
        deleteBtn.addEventListener('click', (event) => {
            Api.deletePost(id);
        })
    }
}

export default Cards