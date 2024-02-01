const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');

// eslint-disable-next-line no-unused-vars
const logger = require('../config/logger');
// const { authService, userService, tokenService, emailService } = require('../services');

const controller = {
  /* /v1/api/graphqlscripts/create */
  create: {
    /* /v1/api/graphqlscripts/create/:graphqlscriptsname */
    _graphqlscriptsname: catchAsync(async (req, res) => {
      // logger.info(Object.keys(req))
      // logger.info(req.originalUrl)
      res.status(httpStatus.CREATED).send({ response: { params: req.params, env: process.env.API72_SECRET_ACCESS_ID } });
    }),
  },

  /* /v1/api/graphqlscripts/delete */
  delete: {
    /* /v1/api/graphqlscripts/delete/:graphqlscriptsnameID */
    _graphqlscriptsnameID: catchAsync(async (req, res) => {
      // const response = {};
      res.status(httpStatus.CREATED).send({ response: { params: req.params, env: process.env.API72_SECRET_ACCESS_ID } });
    }),
  },

  /* /v1/api/graphqlscripts/execute */
  execute: {
    /* /v1/api/graphqlscripts/execute/:graphqlscriptsnameID */
    _graphqlscriptsnameID: catchAsync(async (req, res) => {
      // const response = {};
      res.status(httpStatus.CREATED).send({ response: { params: req.params, env: process.env.API72_SECRET_ACCESS_ID } });
    }),
  },
};

module.exports = controller;
