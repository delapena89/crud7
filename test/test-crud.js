process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/app');
var Duck = require('../server/models/ducks');
var should = chai.should();
chai.use(chaiHttp);

describe("Ducks", function() {

  Duck.collection.drop();
  var id;


  beforeEach(function(done) {
    var newDuck = new Duck({
      name: "Quack",
      age: 7
    });

    id = newDuck._id;

    newDuck.save(function(err){
      done();
    });

});

  afterEach(function(done) {
    Duck.collection.drop();
    done();
  });

it('should list SINGLE ducks on /duck GET', function(done) {
  chai.request(server)
  .get('/duck/' + id )
  .end(function(err, res) {
    console.log(res.body);
    res.should.have.status(200);
    res.should.be.json;
    res.body.should.be.a('object');
    res.body.name.should.be.a('string');
    res.body.name.should.equal('Quack');
    res.body.age.should.be.a('number');
    res.body.age.should.equal(7);
    done();
  });
});

it('should list ALL ducks on /ducks GET', function(done) {
  chai.request(server)
  .get('/ducks')
  .end(function(err, res ) {
    console.log(res.body);
    res.should.have.status(200);
    res.should.be.json;
    res.body.should.be.a('array');
    res.body[0].should.be.a('object');
    res.body[0].name.should.be.a('string');
    res.body[0].name.should.be.equal('Quack');
    res.body[0].age.should.be.a('number');
    res.body[0].age.should.be.equal(7);
    done();
  });
});

  it('should add a SINGLE duck on /duck POST', function(done) {
    chai.request(server)
    .post('/duck/Daffy/10')
    .end(function(err, res) {
      console.log(res.body);
      res.should.have.status(200);
      res.should.be.json;
      res.should.be.a('object');
      res.body.name.should.be.a('string');
      res.body.name.should.equal('Daffy');
      res.body.age.should.be.a('number');
      res.body.age.should.equal(10);
      done();
    });
  });


  // it('should update a SINGLE duck on /duck/<id> PUT', function(done) {
  //   chai.request(server)
  //   .put('/exercise/' + id + '/Donald/100')
  //   .end(function(err, res) {
  //     res.should.have.status(200);
  //     res.should.be.json;
  //     res.body.should.be.a('object');
  //     res.body.name.should.be.a('string');
  //     res.body.name.should.equal('Donald');
  //     res.body.difficulty.should.be.a('number');
  //     res.body.difficulty.should.equal(100);
  //     done();
  //   });
  // });

  //  it('should delete a SINGLE duck on /duck<id> DELETE', function(done) {
  //   chai.request(server)
  //   .delete('/duck/' + id)
  //   .end(function(err, res) {
  //     res.should.have.status(200);
  //     res.should.be.json;
  //     res.body.should.be.a('object');
  //     done();
  //   });
  // });













});// closes describe
