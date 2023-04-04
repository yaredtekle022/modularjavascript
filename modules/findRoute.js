import routes from './routes.js';

const findRoute = (pagelabel) => {
  const route = routes.find((item) => item.label === pagelabel);
  route.page();
};

export default findRoute;