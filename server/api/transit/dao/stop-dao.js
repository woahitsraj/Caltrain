"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const stopSchema = require('../model/stop-model');
const _ = require('lodash');

stopSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    stop
      .find(_query)
      .exec((err, todos) => {
        err ? reject(err)
          : resolve(todos);
      });
  });
}

stopSchema.statics.createNew = (stop) => {
  return new Promise((resolve, reject) => {
    if (!_.isObject(stop)) {
      return reject(new TypeError('Todo is not a valid object.'));
    }

    let _something = new stop(stop);

    _something.save((err, saved) => {
      err ? reject(err)
        : resolve(saved);
    });
  });
}

stopSchema.statics.removeById = (id) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    stop
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
          : resolve();
      });
  });
}

const stop = mongoose.model('stop', stopSchema);

module.exports = stop;
