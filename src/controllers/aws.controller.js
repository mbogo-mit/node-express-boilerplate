const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');

// eslint-disable-next-line no-unused-vars
const logger = require('../config/logger');
// const { authService, userService, tokenService, emailService } = require('../services');

/* /v1/api/aws */
const controller = {
  /* /v1/api/aws/create */
  create: {
    /* /v1/api/aws/create/apigateway */
    apigateway: {
      /* /v1/api/aws/create/apigateway/:apigatewayname */
      _apigatewayname: catchAsync(async (req, res) => {
        // logger.info(Object.keys(req))
        // logger.info(req.originalUrl)
        res.status(httpStatus.CREATED).send({ response: { params: req.params } });
      }),
    },

    /* /v1/api/aws/create/websocket */
    websocket: {
      /* /v1/api/aws/create/websocket/:websocketname */
      _websocketname: catchAsync(async (req, res) => {
        // logger.info(Object.keys(req))
        // logger.info(req.originalUrl)
        res.status(httpStatus.CREATED).send({ response: { params: req.params } });
      }),
    },
  },

  /* /v1/api/aws/delete */
  delete: {
    /* /v1/api/aws/delete/apigateway */
    apigateway: {
      /* /v1/api/aws/delete/apigateway/:apigatewaynameID */
      _apigatewaynameID: catchAsync(async (req, res) => {
        // logger.info(Object.keys(req))
        // logger.info(req.originalUrl)
        res.status(httpStatus.CREATED).send({ response: { params: req.params } });
      }),
    },

    /* /v1/api/aws/delete/websocket */
    websocket: {
      /* /v1/api/aws/delete/websocket/:websocketnameID */
      _websocketnameID: catchAsync(async (req, res) => {
        // logger.info(Object.keys(req))
        // logger.info(req.originalUrl)
        res.status(httpStatus.CREATED).send({ response: { params: req.params } });
      }),
    },
  },

  /* /v1/api/aws/apigateway */
  apigateway: {
    /* /v1/api/aws/apigateway/:apigatewaynameID */
    _apigatewaynameID: {
      /* /v1/api/aws/apigateway/:apigatewaynameID/create */
      create: {
        /* /v1/api/aws/apigateway/:apigatewaynameID/create/dynamodb */
        dynamodb: {
          /* /v1/api/aws/apigateway/:apigatewaynameID/create/dynamodb/:dynamodbname */
          _dynamodbname: catchAsync(async (req, res) => {
            // logger.info(Object.keys(req))
            // logger.info(req.originalUrl)
            res.status(httpStatus.CREATED).send({ response: { params: req.params } });
          }),
        },

        /* /v1/api/aws/apigateway/:apigatewaynameID/create/s3 */
        s3: {
          /* /v1/api/aws/apigateway/:apigatewaynameID/create/s3/:s3name */
          _s3name: catchAsync(async (req, res) => {
            // logger.info(Object.keys(req))
            // logger.info(req.originalUrl)
            res.status(httpStatus.CREATED).send({ response: { params: req.params } });
          }),
        },

        /* /v1/api/aws/apigateway/:apigatewaynameID/create/lambda */
        lambda: {
          /* /v1/api/aws/apigateway/:apigatewaynameID/create/lambda/:lambdaname */
          _lambdaname: catchAsync(async (req, res) => {
            // logger.info(Object.keys(req))
            // logger.info(req.originalUrl)
            res.status(httpStatus.CREATED).send({ response: { params: req.params } });
          }),
        },
      },

      /* /v1/api/aws/apigateway/:apigatewaynameID/delete */
      delete: {
        /* /v1/api/aws/apigateway/:apigatewaynameID/delete/dynamodb */
        dynamodb: {
          /* /v1/api/aws/apigateway/:apigatewaynameID/delete/dynamodb/:dynamodbnameID */
          _dynamodbnameID: catchAsync(async (req, res) => {
            // logger.info(Object.keys(req))
            // logger.info(req.originalUrl)
            res.status(httpStatus.CREATED).send({ response: { params: req.params } });
          }),
        },

        /* /v1/api/aws/apigateway/:apigatewaynameID/delete/s3 */
        s3: {
          /* /v1/api/aws/apigateway/:apigatewaynameID/delete/s3/:s3nameID */
          _s3nameID: catchAsync(async (req, res) => {
            // logger.info(Object.keys(req))
            // logger.info(req.originalUrl)
            res.status(httpStatus.CREATED).send({ response: { params: req.params } });
          }),
        },

        /* /v1/api/aws/apigateway/:apigatewaynameID/delete/lambda */
        lambda: {
          /* /v1/api/aws/apigateway/:apigatewaynameID/delete/lambda/:lambdanameID */
          _lambdanameID: catchAsync(async (req, res) => {
            // logger.info(Object.keys(req))
            // logger.info(req.originalUrl)
            res.status(httpStatus.CREATED).send({ response: { params: req.params } });
          }),
        },
      },

      /* /v1/api/aws/apigateway/:apigatewaynameID/dynamodb */
      dynamodb: {
        /* /v1/api/aws/apigateway/:apigatewaynameID/dynamodb/:dynamodbnameID */
        _dynamodbnameID: catchAsync(async (req, res) => {
          // logger.info(Object.keys(req))
          // logger.info(req.originalUrl)
          res.status(httpStatus.CREATED).send({ response: { params: req.params } });
        }),
      },

      /* /v1/api/aws/apigateway/:apigatewaynameID/s3 */
      s3: {
        /* /v1/api/aws/apigateway/:apigatewaynameID/s3/:s3nameID */
        _s3nameID: catchAsync(async (req, res) => {
          // logger.info(Object.keys(req))
          // logger.info(req.originalUrl)
          res.status(httpStatus.CREATED).send({ response: { params: req.params } });
        }),
      },

      /* /v1/api/aws/apigateway/:apigatewaynameID/lambda */
      lambda: {
        /* /v1/api/aws/apigateway/:apigatewaynameID/lambda/:lambdanameID */
        _lambdanameID: {
          /* /v1/api/aws/apigateway/:apigatewaynameID/lambda/:lambdanameID/read */
          read: catchAsync(async (req, res) => {
            // logger.info(Object.keys(req))
            // logger.info(req.originalUrl)
            res.status(httpStatus.CREATED).send({ response: { params: req.params } });
          }),

          /* /v1/api/aws/apigateway/:apigatewaynameID/lambda/:lambdanameID/update */
          update: catchAsync(async (req, res) => {
            // logger.info(Object.keys(req))
            // logger.info(req.originalUrl)
            res.status(httpStatus.CREATED).send({ response: { params: req.params } });
          }),

          /* /v1/api/aws/apigateway/:apigatewaynameID/lambda/:lambdanameID/execute */
          execute: catchAsync(async (req, res) => {
            // logger.info(Object.keys(req))
            // logger.info(req.originalUrl)
            res.status(httpStatus.CREATED).send({ response: { params: req.params } });
          }),
        },
      },
    },
  },

  /* /v1/api/aws/websocket */
  websocket: {
    /* /v1/api/aws/websocket/:websocketnameID */
    _websocketnameID: catchAsync(async (req, res) => {
      // logger.info(Object.keys(req))
      // logger.info(req.originalUrl)
      res.status(httpStatus.CREATED).send({ response: { params: req.params } });
    }),
  },
};

module.exports = controller;
