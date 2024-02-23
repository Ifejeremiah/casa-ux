const router = require('express').Router();
const UserRoute = require('./user.route');
const HealthRoute = require('./health.route');
const StudentRoute = require('./student.route');
const WaitList = require('./wait-list.route');

const routes = [
  {
    path: '/v1/users',
    route: UserRoute,
  },
  {
    path: '/v1/students',
    route: StudentRoute,
  },
  {
    path: '/v1/wait-list',
    route: WaitList,
  },
  {
    path: '/health',
    route: HealthRoute,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
