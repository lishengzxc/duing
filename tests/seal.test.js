const request = require('supertest');
const expect = require('chai').expect;
const app = require('../');

describe('seal', () => {
  it('200', done => {
    request(app.listen())
      .get('/seal')
      .expect(200)
      .end((err, res) => {
        done();
      })
  })
});