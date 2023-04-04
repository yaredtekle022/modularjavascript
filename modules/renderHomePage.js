import main from './main.js';
import BookListPage from './bookList.js';
import Book from './book.js';

const renderHomePage = () => {
  main.innerHTML = BookListPage();
  Book.fetchBooksFromStorage();
};

export default renderHomePage;