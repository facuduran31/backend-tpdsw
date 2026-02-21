const LaboratorioController = require('../controllers/laboratoriosController');
const LaboratorioModel = require('../models/laboratoriosModel');

jest.mock('../models/laboratoriosModel');

describe('LaboratorioController - getAllLaboratorios', () => {

  it('debe devolver lista de laboratorios', () => {

    const mockLaboratorios = [
      { id: 1, nombre: 'Lab 1' },
      { id: 2, nombre: 'Lab 2' }
    ];

    LaboratorioModel.getAllLaboratorios.mockImplementation((callback) => {
      callback(null, mockLaboratorios);
    });

    const req = {};

    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis()
    };

    LaboratorioController.getAllLaboratorios(req, res);

    expect(res.json).toHaveBeenCalledWith(mockLaboratorios);

  });

});