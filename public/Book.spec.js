//Book = require('./Book');
describe('Book class', () => {
    let book;
    beforeEach(() => {
        book = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 'A novel about the American dream', 'gatsby.jpg', 1);
    });

    it('should store title, author, description, bookImage, and bookRanking', () => {
        expect(book.getTitle()).toBe('The Great Gatsby');
        expect(book.getAuthor()).toBe('F. Scott Fitzgerald');
        expect(book.getDescription()).toBe('A novel about the American dream');
        expect(book.getImage()).toBe('gatsby.jpg');
        expect(book.getBookRanking()).toBe(1);
    });
});