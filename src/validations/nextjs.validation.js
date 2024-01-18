// const Joi = require('joi');
// const { password } = require('./custom.validation');

/* /v1/api/nextjs */
const validator = {
  /* /v1/api/nextjs/create */
  create: {
    /* /v1/api/nextjs/create/:nextjsname */
    _nextjsname: {},
  },

  /* /v1/api/nextjs/delete */
  delete: {
    /* /v1/api/mongodb/delete/:nextjsnameID */
    _nextjsnameID: {},
  },

  /* /v1/api/nextjs/:nextjsnameID */
  _nextjsnameID: {},
};

module.exports = validator;
