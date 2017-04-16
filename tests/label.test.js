const request = require('supertest');
const expect = require('chai').expect;
const app = require('../');

describe('label', () => {
  it('200', done => {
    request(app.listen())
      .get('/label')
      .expect(200)
      .end((err, res) => {
        done();
      })
  })
});