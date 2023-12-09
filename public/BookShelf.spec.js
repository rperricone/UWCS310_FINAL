
describe('BookShelf class', () => {
    let bookShelf;
    beforeEach(() => {
        bookShelf = new BookShelf();
    });

    it('should store books in sorted order', () => {
        const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 'A novel about the American dream', 'gatsby.jpg', 2);
        const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 'A novel about racism and injustice', 'mockingbird.jpg', 1);
        bookShelf.addBook(book1);
        bookShelf.addBook(book2);
        const books = bookShelf.getBooks();
        expect(books[0]).toBe(book2);
        expect(books[1]).toBe(book1);
    });
});