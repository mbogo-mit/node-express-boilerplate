const Joi = require('joi');
// const { password } = require('./custom.validation');

/* /v1/api/mongodb */
const validator = {
  /* /v1/api/mongodb/create */
  create: {
    /* /v1/api/mongodb/create/:mongodbname */
    _mongodbname: {},
  },

  /* /v1/api/mongodb/delete */
  delete: {
    /* /v1/api/mongodb/delete/:mongodbnameID */
    _mongodbnameID: {},
  },

  /* /v1/api/mongodb/:mongodbnameID */
  _mongodbnameID: {},

  /* /v1/api/mongodb/script */
  script: {
    /* /v1/api/mongodb/script/execute */
    execute: {
      body: Joi.object()
        .keys({
          MongoDBName: Joi.string().required(),
          MongoDB: Joi.object().keys({
            root: Joi.boolean().required(),
            chain: Joi.array(),
          }),
        })
        .required(),
    },
  },
};

module.exports = validator;
