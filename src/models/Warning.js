class Warning {
    static modal(messageObj) {
        const modal = document.getElementById('modalWindow');
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');

        modal.style.display = 'block';
        modalTitle.innerText = messageObj.title;
        modalBody.innerText = messageObj.message;

        window.onclick = function(event) {
            if(event.target == modal) {
                modal.style.display = 'none';
            }
        }

        this.closeModalBtn();
    }

    static closeModalBtn() {
        const closeBtn = document.getElementById('closeModal');
        const modal = document.getElementById('modalWindow');
        closeBtn.addEventListener('click', (event) => {
            modal.style.display = 'none';
        })
    }
}

export default Warning