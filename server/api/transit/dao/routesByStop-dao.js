"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const routesbystopSchema = require('../model/routesByStop-model');
const _ = require('lodash');

routesbystopSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    routesByStop
      .find(_query)
      .exec((err, todos) => {
        err ? reject(err)
          : resolve(todos);
      });
  });
}

routesbystopSchema.statics.createNew = (routesbystop) => {
  return new Promise((resolve, reject) => {
    if (!_.isObject(routesbystop)) {
      return reject(new TypeError('Todo is not a valid object.'));
    }

    let _something = new routesByStop(routesbystop);

    _something.save((err, saved) => {
      err ? reject(err)
        : resolve(saved);
    });
  });
}

routesbystopSchema.statics.removeById = (id) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    routesByStop
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
          : resolve();
      });
  });
}

const routesByStop = mongoose.model('routesByStop', routesbystopSchema);

module.exports = routesByStop;
