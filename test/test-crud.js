process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/app');
var Duck = require('../server/models/ducks');
var should = chai.should();
chai.use(chaiHttp);
