const request = require('supertest');
const app = require('../');

describe('checkbox', () => {
  it('200', (done) => {
    request(app.listen())
      .get('/label')
      .expect(200)
      .end(() => {
        done();
      });
  });
});
