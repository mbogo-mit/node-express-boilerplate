// const Joi = require('joi');
// const { password } = require('./custom.validation');

/* /v1/api/ledger */
const validator = {
  /* /v1/api/ledger/environmentvariables */
  environmentvariables: {
    /* /v1/api/ledger/environmentvariables/api */
    api: {},

    /* /v1/api/ledger/environmentvariables/ec2 */
    ec2: {
      /* /v1/api/ledger/environmentvariables/ec2/:ec2nameID */
      _ec2nameID: {},
    },

    /* /v1/api/ledger/environmentvariables/apigateway */
    apigateway: {
      /* /v1/api/ledger/environmentvariables/apigateway/:apigatewaynameID */
      _apigatewaynameID: {},
    },

    /* /v1/api/ledger/environmentvariables/websocket */
    websocket: {
      /* /v1/api/ledger/environmentvariables/websocket/:websocketnameID */
      _websocketnameID: {},
    },

    /* /v1/api/ledger/environmentvariables/mongodb */
    mongodb: {
      /* /v1/api/ledger/environmentvariables/mongodb/:mongodbnameID */
      _mongodbnameID: {},
    },

    /* /v1/api/ledger/environmentvariables/nextjs */
    nextjs: {
      /* /v1/api/ledger/environmentvariables/nextjs/:_nextjsnameID */
      _nextjsnameID: {},
    },
  },

  /* /v1/api/ledger/secrets */
  secrets: {
    /* /v1/api/ledger/secrets/api */
    api: {},
    /* /v1/api/ledger/secrets/ec2 */
    ec2: {
      /* /v1/api/ledger/secrets/ec2/:ec2nameID */
      _ec2nameID: {},
    },

    /* /v1/api/ledger/secrets/apigateway */
    apigateway: {
      /* /v1/api/ledger/secrets/apigateway/:apigatewaynameID */
      _apigatewaynameID: {},
    },

    /* /v1/api/ledger/secrets/websocket */
    websocket: {
      /* /v1/api/ledger/secrets/websocket/:websocketnameID */
      _websocketnameID: {},
    },

    /* /v1/api/ledger/secrets/mongodb */
    mongodb: {
      /* /v1/api/ledger/secrets/mongodb/:mongodbnameID */
      _mongodbnameID: {},
    },

    /* /v1/api/ledger/secrets/nextjs */
    nextjs: {
      /* /v1/api/ledger/secrets/nextjs/:nextjsnameID */
      _nextjsnameID: {},
    },
  },

  /* /v1/api/ledger/events */
  events: {
    /* /v1/api/ledger/events/api */
    api: {},

    /* /v1/api/ledger/events/graphqlscripts */
    graphqlscripts: {
      /* /v1/api/ledger/events/graphqlscripts/:graphqlscriptsnameID */
      _graphqlscriptsnameID: {},
    },

    /* /v1/api/ledger/events/ec2 */
    ec2: {
      /* /v1/api/ledger/events/ec2/:ec2nameID */
      _ec2nameID: {},
    },

    /* /v1/api/ledger/events/apigateway */
    apigateway: {
      /* /v1/api/ledger/events/apigateway/:apigatewaynameID */
      _apigatewaynameID: {},
    },

    /* /v1/api/ledger/events/websocket */
    websocket: {
      /* /v1/api/ledger/events/websocket/:websocketnameID */
      _websocketnameID: {},
    },

    /* /v1/api/ledger/events/mongodb */
    mongodb: {
      /* /v1/api/ledger/events/mongodb/:mongodbnameID */
      _mongodbnameID: {},
    },

    /* /v1/api/ledger/events/nextjs */
    nextjs: {
      /* /v1/api/ledger/events/nextjs/:nextjsnameID */
      _nextjsnameID: {},
    },
  },

  /* /v1/api/ledger/architecture */
  architecture: {
    /* /v1/api/ledger/architecture/api */
    api: {},

    /* /v1/api/ledger/architecture/ec2 */
    ec2: {
      /* /v1/api/ledger/architecture/ec2/:ec2nameID */
      _ec2nameID: {},
    },

    /* /v1/api/ledger/architecture/apigateway */
    apigateway: {
      /* /v1/api/ledger/architecture/apigateway/:apigatewaynameID */
      _apigatewaynameID: {},
    },

    /* /v1/api/ledger/architecture/websocket */
    websocket: {
      /* /v1/api/ledger/architecture/websocket/:websocketnameID */
      _websocketnameID: {},
    },

    /* /v1/api/ledger/architecture/mongodb */
    mongodb: {
      /* /v1/api/ledger/architecture/mongodb/:mongodbnameID */
      _mongodbnameID: {},
    },

    /* /v1/api/ledger/architecture/nextjs */
    nextjs: {
      /* /v1/api/ledger/architecture/nextjs/:nextjsnameID */
      _nextjsnameID: {},
    },
  },
};

module.exports = validator;
