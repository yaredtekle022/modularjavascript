import main from './main.js';
import Contact from './contact.js';

const renderContactPage = () => {
  main.innerHTML = Contact();
};
export default renderContactPage;