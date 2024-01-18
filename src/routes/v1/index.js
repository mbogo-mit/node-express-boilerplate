const express = require('express');

const graphqlscriptsRoute = require('./graphqlscripts.route');
const awsRoute = require('./aws.route');
const mongodbRoute = require('./mongodb.route');
const nextjsRoute = require('./nextjs.route');
const ledgerRoute = require('./ledger.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/graphqlscripts',
    route: graphqlscriptsRoute,
  },
  {
    path: '/aws',
    route: awsRoute,
  },
  {
    path: '/mongodb',
    route: mongodbRoute,
  },
  {
    path: '/nextjs',
    route: nextjsRoute,
  },
  {
    path: '/ledger',
    route: ledgerRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
