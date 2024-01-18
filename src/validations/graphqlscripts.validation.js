// const Joi = require('joi');
// const { password } = require('./custom.validation');

/* /v1/api/graphqlscripts */
const validator = {
  /* /v1/api/graphqlscripts/create/:graphqlscriptsname */
  create: {
    _graphqlscriptsname: {},
  },

  /* /v1/api/graphqlscripts/delete/:graphqlscriptsnameID */
  delete: {
    _graphqlscriptsnameID: {},
  },

  /* /v1/api/graphqlscripts/execute/:graphqlscriptsnameID */
  execute: {
    _graphqlscriptsnameID: {},
  },
};

module.exports = validator;
