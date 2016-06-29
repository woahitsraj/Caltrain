"use strict";

const mongoose = require('mongoose');
const routesByStopDAO = require(process.cwd() + '/server/api/transit/dao/routesByStop-dao');
const expect = require('chai').expect;
const setupMongoose = require('../../_helpers/db').setupMongoose;

describe('routesByStopDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    routesByStopDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
