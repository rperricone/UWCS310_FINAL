class Book {
    constructor(title, author, description, bookImage, bookRanking) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.bookImage = bookImage;
        this.bookRanking = bookRanking;
    }
    getImage() {
        return this.bookImage;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getDescription() {
        return this.description;
    }
    getBookRanking() {
        return this.bookRanking;
    }
    toObject() {
        return {
            title: this.title,
            author: this.author,
            description: this.description,
            bookImage: this.bookImage,
            bookRanking: this.bookRanking
        }
    }

}
// todo : convert these to prototype methods - stored in memory once 

Book.prototype.getDetails = function() {
    return this.title + ' by ' + this.author;
}