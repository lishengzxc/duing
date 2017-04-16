const request = require('supertest');
const expect = require('chai').expect;
const app = require('../');

describe('checkbox', () => {
  it('200', done => {
    request(app.listen())
      .get('/checkbox')
      .expect(200)
      .end((err, res) => {
        done();
      })
  })
});