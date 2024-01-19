const router = require('express').Router();
const UserRoute = require('./user.route');
const HealthRoute = require('./health.route');
const CourseRoute = require('./course.route');

const routes = [
  {
    path: '/v1/courses',
    route: CourseRoute,
  },
  {
    path: '/v1/users',
    route: UserRoute,
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
