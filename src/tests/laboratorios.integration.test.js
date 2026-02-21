jest.mock('../models/laboratoriosModel', () => ({
  getAllLaboratorios: jest.fn((callback) => {
    callback(null, [{ id: 1, nombre: 'Lab 1' }]);
  })
}));

const request = require('supertest');
const app = require('../../index');

describe('GET /api/laboratorios', () => {

  it('debe responder con status 200', async () => {
    const response = await request(app)
      .get('/api/laboratorios')
      .expect(200);

    expect(response.body).toEqual([
      { id: 1, nombre: 'Lab 1' }
    ]);
  });

});