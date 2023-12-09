class BookShelf {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
        this.books.sort((a, b) => a.getBookRanking() - b.getBookRanking());
    }

    getBooks() {
        return this.books;
    }
}
