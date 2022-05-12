class Cards {
    static generateCard(date) {
        const cardSection = document.getElementById('cardSection');
        const cardMain = document.createElement('li');
        const cardImg = document.createElement('img');
        const cardContent = document.createElement('div');
        const cardTitle = document.createElement('h3');
        const cardText = document.createElement('div');
        const cardInfo = document.createElement('div');
        const cardEdit = document.createElement('div');
        const cardDelete = document.createElement('div');
        const cardDate = document.createElement('div');

        cardMain.classList.add('card');
        cardImg.classList.add('card-img');
        cardContent.classList.add('card-content');
        cardText.classList.add('card-text');
        cardInfo.classList.add('card-info');
        cardEdit.classList.add('carde-edit');
        cardDelete.classList.add('carde-delete');
        cardDate.classList.add('carde-date');

        cardImg.src = 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F06%2F26%2Ftiny-white-kitten-873941684-2000.jpg';
        cardTitle.innerText = 'Cats Awesome Thoughts!';
        cardText.innerText += `Lay on arms while you're using the keyboard make meme, make cute face stare at wall turn and meow stare at wall some more meow again continue staring . Sleep everywhere, but not in my bed favor packaging over toy sniff sniff i can haz bite plants hiiiiiiiiii feed me now. Weigh eight pounds but take up a full-size bed. Mewl for food at 4am in the middle of the night i crawl onto your chest and purr gently to help you sleep whenever a door is opened, rush in before the human so fall asleep on the washing machine and love blinks and purr purr purr purr yawn drool go crazy with excitement when plates are clanked together signalling the arrival of cat food.`;
        cardEdit.innerText = 'Editar';
        cardDelete.innerText = 'Apagar';
        cardDate.innerText = date;

        cardContent.append(cardTitle, cardText);
        cardInfo.append(cardEdit, cardDelete, cardDate);

        cardMain.append(cardImg, cardContent, cardInfo);
        cardSection.append(cardMain);
    }
}

Cards.generateCard('01/01/2022');
Cards.generateCard('31/12/2021');

export default Cards