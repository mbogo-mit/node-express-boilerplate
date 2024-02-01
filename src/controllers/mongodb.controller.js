const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');

// eslint-disable-next-line no-unused-vars
const logger = require('../config/logger');
// const { authService, userService, tokenService, emailService } = require('../services');

const controller = {
  /* /v1/api/mongodb/create */
  create: {
    /* /v1/api/mongodb/create/:mongodbname */
    _mongodbname: catchAsync(async (req, res) => {
      // logger.info(Object.keys(req))
      // logger.info(req.originalUrl)
      res.status(httpStatus.CREATED).send({ response: { params: req.params, env: process.env.API72_SECRET_ACCESS_ID } });
    }),
  },

  /* /v1/api/mongodb/delete */
  delete: {
    /* /v1/api/mongodb/delete/:mongodbnameID */
    _mongodbnameID: catchAsync(async (req, res) => {
      // const response = {};
      res.status(httpStatus.CREATED).send({ response: { params: req.params, env: process.env.API72_SECRET_ACCESS_ID } });
    }),
  },

  /* /v1/api/mongodb/mongodbnameID */
  _mongodbnameID: catchAsync(async (req, res) => {
    // const response = {};
    res.status(httpStatus.CREATED).send({ response: { params: req.params, env: process.env.API72_SECRET_ACCESS_ID } });
  }),

  /* /v1/api/mongodb/script */
  script: {
    /* /v1/api/mongodb/script/execute */
    execute: catchAsync(async (req, res) => {
      // const response = {};
      res.status(httpStatus.CREATED).send({ response: { params: req.params, env: process.env.API72_SECRET_ACCESS_ID } });
    }),
  },
};

module.exports = controller;
