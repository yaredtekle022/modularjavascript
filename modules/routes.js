import renderHomePage from './renderHomePage.js';
import renderFormPage from './renderFormPage.js';
import renderContactPage from './renderContactPage.js';

const routes = [
  {
    label: 'List',
    page: () => {
      renderHomePage();
    },
  },
  {
    label: 'Add new',
    page: () => {
      renderFormPage();
    },
  },
  {
    label: 'Contact',
    page: () => {
      renderContactPage();
    },
  },
];

export default routes;