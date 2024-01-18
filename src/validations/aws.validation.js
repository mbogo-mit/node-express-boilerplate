// const Joi = require('joi');
// const { password } = require('./custom.validation');

/* /v1/api/aws */
const validator = {
  /* /v1/api/aws/create */
  create: {
    /* /v1/api/aws/create/apigateway */
    apigateway: {
      /* /v1/api/aws/create/apigateway/:apigatewayname */
      _apigatewayname: {},
    },

    /* /v1/api/aws/create/websocket */
    websocket: {
      /* /v1/api/aws/create/websocket/:websocketname */
      _websocketname: {},
    },
  },

  /* /v1/api/aws/delete */
  delete: {
    /* /v1/api/aws/delete/apigateway */
    apigateway: {
      /* /v1/api/aws/delete/apigateway/:apigatewaynameID */
      _apigatewaynameID: {},
    },

    /* /v1/api/aws/delete/websocket */
    websocket: {
      /* /v1/api/aws/delete/websocket/:websocketnameID */
      _websocketnameID: {},
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
          _dynamodbname: {},
        },

        /* /v1/api/aws/apigateway/:apigatewaynameID/create/s3 */
        s3: {
          /* /v1/api/aws/apigateway/:apigatewaynameID/create/s3/:s3name */
          _s3name: {},
        },

        /* /v1/api/aws/apigateway/:apigatewaynameID/create/lambda */
        lambda: {
          /* /v1/api/aws/apigateway/:apigatewaynameID/create/lambda/:lambdaname */
          _lambdaname: {},
        },
      },

      /* /v1/api/aws/apigateway/:apigatewaynameID/delete */
      delete: {
        /* /v1/api/aws/apigateway/:apigatewaynameID/delete/dynamodb */
        dynamodb: {
          /* /v1/api/aws/apigateway/:apigatewaynameID/delete/dynamodb/:dynamodbnameID */
          _dynamodbnameID: {},
        },

        /* /v1/api/aws/apigateway/:apigatewaynameID/delete/s3 */
        s3: {
          /* /v1/api/aws/apigateway/:apigatewaynameID/delete/s3/:s3nameID */
          _s3nameID: {},
        },

        /* /v1/api/aws/apigateway/:apigatewaynameID/delete/lambda */
        lambda: {
          /* /v1/api/aws/apigateway/:apigatewaynameID/delete/lambda/:lambdanameID */
          _lambdanameID: {},
        },
      },

      /* /v1/api/aws/apigateway/:apigatewaynameID/dynamodb */
      dynamodb: {
        /* /v1/api/aws/apigateway/:apigatewaynameID/dynamodb/:dynamodbnameID */
        _dynamodbnameID: {},
      },

      /* /v1/api/aws/apigateway/:apigatewaynameID/s3 */
      s3: {
        /* /v1/api/aws/apigateway/:apigatewaynameID/s3/:s3nameID */
        _s3nameID: {},
      },

      /* /v1/api/aws/apigateway/:apigatewaynameID/lambda */
      lambda: {
        /* /v1/api/aws/apigateway/:apigatewaynameID/lambda/:lambdanameID */
        _lambdanameID: {},
      },
    },
  },

  /* /v1/api/aws/websocket */
  websocket: {
    /* /v1/api/aws/websocket/:websocketnameID */
    _websocketnameID: {},
  },
};

module.exports = validator;
