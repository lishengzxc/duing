const request = require('supertest');
const app = require('../');

describe('progress', () => {
  it('200', (done) => {
    request(app.listen())
      .get('/progress')
      .expect(200)
      .end(() => {
        done();
      });
  });
});
