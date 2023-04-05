import main from './main.js';
import addBookForm from './addBookForm.js';
import renderHomePage from './renderHomePage.js';
import Book from './book.js';

const renderFormPage = () => {
  main.innerHTML = addBookForm();
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = form.title.value;
    const author = form.author.value;
    const newBook = new Book(title, author);
    newBook.addBook();
    newBook.saveToStorage();
    form.reset();
    renderHomePage();
  });
};

export default renderFormPage;