"use strict";

const mongoose = require('mongoose');
const stopDAO = require(process.cwd() + '/server/api/transit/dao/stop-dao');
const expect = require('chai').expect;
const setupMongoose = require('../../_helpers/db').setupMongoose;

describe('stopDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    stopDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
