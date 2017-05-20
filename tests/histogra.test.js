const request = require('supertest');
const app = require('../');

describe('histogram', () => {
  it('200', (done) => {
    request(app.listen())
      .get('/histogram?list=[{"k":"5/20","v":1},{"k":"5/21","v":10},{"k":"5/22","v":6},{"k":"5/23","v":3},{"k":"5/23","v":4}]')
      .expect(200)
      .end(() => {
        done();
      });
  });
});
