const request = require('supertest');
const expect = require('chai').expect;
const app = require('../');

describe('dot', () => {
  it('200', done => {
    request(app.listen())
      .get('/dot')
      .expect(200)
      .end((err, res) => {
        done();
      })
  })
});