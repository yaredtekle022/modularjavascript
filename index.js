import findRoute from './modules/findRoute.js';
import removeAllActiveClasses from './modules/removeAllActiveClasses.js';
import navLinkContainer from './modules/navLinkContainer.js';
import routes from './modules/routes.js';
import renderHomePage from './modules/renderHomePage.js';
import displayDate from './modules/time.js';

navLinkContainer.addEventListener('click', (e) => {
  if (e.target.matches('li a')) {
    e.preventDefault();
    findRoute(e.target.textContent);
    removeAllActiveClasses();
    e.target.classList.add('active');
    sessionStorage.setItem('page', e.target.textContent);
  }
});

const renderRoutes = () => {
  let routeHtml = '';
  routes.forEach((route) => {
    routeHtml += `
      <li>
        <a href="#">${route.label}</a>
    </li>
      `;
  });

  navLinkContainer.innerHTML = routeHtml;
};
window.addEventListener('DOMContentLoaded', () => {
  renderRoutes();
  displayDate();
  const currentPage = sessionStorage.getItem('page');

  if (currentPage) {
    findRoute(currentPage);
  } else {
    renderHomePage();
  }
});