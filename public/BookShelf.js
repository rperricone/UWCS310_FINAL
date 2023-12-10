class BookShelf {
    constructor() {
        this.books = [];

    }

    addBook(book) {
        this.books.push(book);
        new Set(this.books)
       // this.books.sort((a, b) => a.getBookRanking() - b.getBookRanking());
       return this.books.length - 1;
    }
    
    removeBook(title) {
        this.books = this.books.filter(book => book.getTitle() !== title);
    }

    getBooks() {
        return new Set(this.books);
    }
    getBook(index) {
        return this.books[index];
    }
}
