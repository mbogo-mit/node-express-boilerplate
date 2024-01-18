const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');

// eslint-disable-next-line no-unused-vars
const logger = require('../config/logger');
// const { authService, userService, tokenService, emailService } = require('../services');

const controller = {
  /* /v1/api/nextjs/create */
  create: {
    /* /v1/api/nextjs/create/:nextjsname */
    _nextjsname: catchAsync(async (req, res) => {
      // logger.info(Object.keys(req))
      // logger.info(req.originalUrl)
      res.status(httpStatus.CREATED).send({ response: { params: req.params } });
    }),
  },

  /* /v1/api/nextjs/delete */
  delete: {
    /* /v1/api/nextjs/delete/:nextjsnameID */
    _nextjsnameID: catchAsync(async (req, res) => {
      // const response = {};
      res.status(httpStatus.CREATED).send({ response: { params: req.params } });
    }),
  },

  /* /v1/api/nextjs/:nextjsnameID */
  _nextjsnameID: catchAsync(async (req, res) => {
    // const response = {};
    res.status(httpStatus.CREATED).send({ response: { params: req.params } });
  }),
};

module.exports = controller;
