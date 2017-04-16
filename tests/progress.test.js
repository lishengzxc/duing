const request = require('supertest');
const expect = require('chai').expect;
const app = require('../');

describe('progress', () => {
  it('200', done => {
    request(app.listen())
      .get('/progress')
      .expect(200)
      .end((err, res) => {
        done();
      })
  })
});