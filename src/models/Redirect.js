class Redirect {
    static redirectPage(page) {
        window.location.assign(`./${page}`);
    }
}

export default Redirect