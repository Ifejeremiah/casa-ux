const router = require('express').Router();
const UserRoute = require('./user.routes')

const routes = [
  {
    path: '/v1/users',
    route: UserRoute
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;