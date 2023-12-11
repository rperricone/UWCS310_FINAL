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
    loadBooksByJSON(jsonText){
        console.log(jsonText, 'jsonText')
        /**
         *        this.title = title;
        this.author = author;
        this.description = description;
        this.bookImage = bookImage;
        this.bookRanking = bookRanking;
         */
        this.books = JSON.parse(jsonText).map(bookData => new Book(bookData.title, bookData.author, bookData.description, bookData.bookImage, bookData.bookRanking));

    
    }
    getObject(){
        let booksObj = []
        for (let book of [...this.getBooks()]){
            booksObj.push(book.toObject())
        }
        return booksObj // [ {author: 'author', title: 'title', description: 'description', bookImage: 'bookImage', bookRanking: 'bookRanking'},]

       // localStorage.setItem('selectedBooks', JSON.stringify([... this.getBooks()]))
    }
}
