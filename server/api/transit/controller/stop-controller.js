"use strict";

const stop = require('../dao/stop-dao');

module.exports = class stopController {
  static getAll(req, res) {
    stopDAO
      .getAll()
      .then(stop => res.status(200).json(stops))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _stop = req.body;

    stopDAO
      .createNew(_stop)
      .then(stop => res.status(201).json(stop))
      .catch(error => res.status(400).json(error));
  }

  static removeById(req, res) {
    let _id = req.params.id;

    stopDAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
